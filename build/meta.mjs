import OpenAI from "openai";
import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import * as cli from "cli-block";
import { upperSnakeCase } from "@sil/case";
//@ts-ignore
import dotenv from "dotenv";
dotenv.config();
import { fileURLToPath } from "url";
import { dirname } from "path";

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize OpenAI client with API key
// @ts-ignore
const openai = new OpenAI(process.env.OPENAI_API_KEY);

let tries = 0;
let left = 0;

const getIconList = async () => {
  const iconsDirPath = path.join(process.cwd(), "/src/icons");
  const iconsDirExists = fs.existsSync(iconsDirPath);

  if (iconsDirExists) {
    const categories = fs.readdirSync(iconsDirPath).filter((subDir) => {
      return fs.statSync(path.join(iconsDirPath, subDir)).isDirectory();
    });

    let icons = [];

    categories.forEach((category) => {
      const categoryPath = path.join(iconsDirPath, category);
      const files = fs
        .readdirSync(categoryPath)
        .filter((f) => f.includes(".svg"));

      files.forEach((file) => {
        icons.push({
          name: file.replace(".svg", "").replace("icon_", ""),
          file: file,
          category: category,
        });
      });
    });

    return icons;
  } else {
    console.log("Icons directory does not exist; ", iconsDirPath);
  }

  return [];
};

const handleError = (error) => {
  tries++;
  switch (error.status) {
    case 429:
      cli.blockLineError(
        `Rate limit exceeded, retrying after 5 seconds, tries (${tries})`
      );

      if (tries === 5) {
        createDummyFiles();
        return;
      }
      tryAgain(5000);
      return;
    default:
      console.error(error);
      tryAgain(0);
      break;
  }
};
const tryAgain = (delay = 0, skip = false) => {
  setTimeout(() => {
    processIcons(skip).catch((err) => handleError(err));
  }, delay);
};

const createDummyFiles = async () => {
  const AllIcons = await getIconList();
  const icons = getTodoIcons(AllIcons);
  tries = 0;

  for (const icon of icons) {
    const meta = {
      description: "",
      category: [icon.name],
      tag: [],
      title: icon.name,
    };
    const metaFileContent = createMetaJs(meta);
    fs.writeFileSync(getPath(icon).file, metaFileContent);

    const metaFileJson = createMetaJson(meta);
    fs.writeFileSync(getPath(icon, "json").file, metaFileJson);
  }
  tryAgain(1000, true);
};

async function generateIconMeta(icon) {
  // async function generateIconMeta(iconName: string) {
  const prompt = `Given an icon named "${icon.name}", and base category is "${icon.category}"  write a short description, tags (at least 10), a few categories and a title (Readable version of the icon name). This is the return type you need to give me: \`\`\`{ description: string, category: string[], tag: string[], title: string }\`\`\`. This is a list of all the available categories: [Arrows, Accessibility, Shapes, Animals, Media, Text, Document, Transport, Interface, Symbol, Tile, Weather], more can be added. Make sure the response is valid json.`;
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });
    const text = response.choices[0].message?.content?.trim() || "";
    try {
      // remove trailing comma, which happens occasionally
      const regexTrailingComma = /\,(?!\s*?[\{\[\"\'\w])/g;
      // remove quotes around json
      const regexQuotesJson = /^```json\s*\n|\s*\n```$/g;
      const regexQuotes = /^```\s*\n|\s*\n```$/g;
      const parsed = JSON.parse(
        text
          .replace(regexQuotesJson, "")
          .replace(regexQuotes, "")
          .replace(regexTrailingComma, "")
      );
      return {
        ...parsed,
        description: parsed.description,
        category: parsed?.category || parsed?.categories || [],
        tag: parsed?.tags || parsed?.tag || [],
      };
    } catch (err) {
      // console.error(err);
      handleError(err);
    }
  } catch (error) {
    handleError(error);
  }
}

const getPath = (icon, ext = "json") => {
  const folderPath = path.join(process.cwd(), "src", "meta");
  return {
    path: folderPath,
    file: icon
      ? path.join(folderPath, `${icon.file.toLowerCase()}.${ext}`)
      : null,
  };
};

/**
 * Checks if metadata exists for a given icon.
 *
 * @param {Object} icon - The icon object.
 * @param {string} icon.file - The file name of the icon.
 * @returns {boolean} - True if the metadata file exists, otherwise false.
 */
const metaExists = (icon) => {
  const data = metaData(icon);
  return !!data.description;
};
/**
 * Retrieves metadata for a given icon.
 *
 * @param {Object} icon - The icon object.
 * @param {string} icon.file - The file name of the icon.
 * @returns {Object} - The parsed metadata of the icon.
 * @throws {Error} - Throws an error if the metadata file cannot be read or parsed.
 */
const metaData = (icon) => {
  try {
    const data = fs.readFileSync(getPath(icon).file, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {
      title: "",
      description: "",
      tag: "",
      category: "",
    };
    // throw new Error(
    //   `Failed to read or parse metadata for icon: ${icon.file}. Error: ${error.message}`
    // );
  }
};

const createMetaJs = (meta) => {
  return `
    export const meta = {
      description: "${meta.description}",
      category: ${JSON.stringify(meta.category)},
      tag: ${JSON.stringify(meta.tag)},
      title: "${meta.title}"
    };
    export default meta;
`;
};

const createMetaJson = (data) => {
  const meta = {
    description: data.description,
    category: data.category,
    tag: data.tag,
    title: data.title,
  };
  return JSON.stringify(meta, null, 2);
};

const createMetaFolder = () => {
  const metaDirPath = getPath().path;
  if (!fs.existsSync(metaDirPath)) {
    fs.mkdirSync(metaDirPath, { recursive: true });
  }
  return metaDirPath;
};

const getTodoIcons = (AllIcons) => {
  return AllIcons.filter((icon) => {
    const data = metaData(icon);
    return !data.description;
  });
};

const createTagsFile = (globalTag) => {
  try {
    const tagString = JSON.stringify(Array.from(globalTag), null, 2);
    const tagData = `export const IconTags = ${tagString}`;
    fs.writeFileSync(path.join(getPath().path, "tags.ts"), tagData);
    cli.blockLineSuccess("tags.json is generated successfully.");
  } catch (error) {
    console.error("Error generating icon meta:", error);
  }
};

const createCategoryFile = (globalCategory) => {
  try {
    const categoryString = JSON.stringify(Array.from(globalCategory), null, 2);
    const categoryData = `export const IconCategories = ${categoryString}`;
    fs.writeFileSync(path.join(getPath().path, "categories.ts"), categoryData);
    cli.blockLineSuccess("categories.json is generated successfully.");
  } catch (error) {
    console.error("Error generating icon meta:", error);
  }
};

const createGlobalIndex = (AllIcons) => {
  const indexFilePath = path.join(getPath().path, "index.ts");
  const indexFileContent = `
    import { Icons } from "../icons/types";
    export * from "./categories";
    export * from "./tags";

    export interface IconMeta {
        description: string;
        category: string[];
        tag: string[];
        title: string;
    }
export const getMeta = async (icon: Icons):Promise<IconMeta | null>=> {
    switch(icon) {
        ${AllIcons.map(
          (icon) => `
        case Icons.${upperSnakeCase(icon.name)}:
            return (await import("./${icon.file.toLowerCase()}")).default;`
        ).join("\n")}
        default:
          return null;
    }
      }`;
  fs.writeFileSync(indexFilePath, indexFileContent);
};

async function processIcons(skip = false) {
  let globalCategory = new Set();
  let globalTag = new Set();
  cli.blockHeader("Icon Meta Generation");

  createMetaFolder();

  const AllIcons = await getIconList();
  if (!AllIcons) return;

  const todoIcons = getTodoIcons(AllIcons);
  left = todoIcons.length;

  cli.blockLine(`Found ${AllIcons.length} icons.`);
  cli.blockLine(`Found ${todoIcons.length} icons without meta data.`);

  // console.log("AllIcons", AllIcons);

  for (const icon of AllIcons) {
    if (metaExists(icon) || skip) {
      const meta = metaData(icon);

      cli.blockLine(
        `Skipping icon "${icon.name}" as meta file already exists.`
      );

      meta.category.forEach((category) => globalCategory.add(category));
      meta.tag.forEach((tag) => globalTag.add(tag));

      continue;
    }

    await cli.blockMid(`${icon.name} ${(todoIcons.length - (left - 1))}/${todoIcons.length}`);

    const meta = await generateIconMeta(icon);
    if (!meta) return;
    if (meta.error) {
      const m = meta;
      console.log(m.error);
      console.log(m.apiResponse);
      cli.blockLineError(m.description);
      return;
    } else {
      await cli.blockSettings(meta);

      const metaFileContent = createMetaJs(meta);
      fs.writeFileSync(getPath(icon, "ts").file, metaFileContent);

      const metaFileJson = createMetaJson(meta);
      fs.writeFileSync(getPath(icon, "json").file, metaFileJson);

      meta.category.forEach((category) => globalCategory.add(category));
      meta.tag.forEach((tag) => globalTag.add(tag));
      left--;
    }
  }

  cli.blockMid("global files");

  createCategoryFile(globalCategory);
  createTagsFile(globalTag);
  createGlobalIndex(AllIcons);

  if (skip) {
    const todoIcons = getTodoIcons(AllIcons);
    cli.blockMid();
    cli.blockLineWarning(`There are ${todoIcons.length} skipped due to Open AI rate limit.`);
 }

  cli.blockMid();
  cli.blockLineSuccess("Meta files generated successfully.");
  cli.blockFooter();
}
processIcons().catch((err) => console.error(err));
