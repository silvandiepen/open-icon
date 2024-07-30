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
        const files = fs.readdirSync(categoryPath).filter((f) => f.includes(".svg"));

        files.forEach((file) => {
          icons.push({
            name: file.replace(".svg", "").replace("icon_", ""),
            file: file,
            category: category
          });
        });
      });

      return icons;
    } else {
      console.log("Icons directory does not exist; ", iconsDirPath);
    }

    return [];
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
        category: parsed.category || parsed.categories || [],
        tag: parsed.tags || parsed.tag || [],
      };
    } catch (err) {
      processIcons().catch((err) => console.error(err));
      // return {
      //   description: `Description generation failed, icon :: ${icon.name}`,
      //   error: err,
      //   apiResponse: text,
      // };
    }
  } catch (error) {
    processIcons().catch((err) => console.error(err));
    // return {
    //   description: `Description generation failed, icon :: ${icon.name}`,
    //   error,
    //   apiResponse: "",
    // };
  }
}
async function processIcons() {
  let globalCategory = new Set();
  let globalTag = new Set();
  cli.blockHeader("Icon Meta Generation");
  const metaDirPath = process.cwd() + "/src/meta";

  if (!fs.existsSync(metaDirPath)) {
    fs.mkdirSync(metaDirPath, { recursive: true });
  }
  const AllIcons = await getIconList();
  if (!AllIcons) return;

  console.log("AllIcons", AllIcons);

  for (const icon of AllIcons) {
    await cli.blockMid(icon.name);

    const metaFilePath = path.join(metaDirPath, `${icon.file.toLowerCase()}.ts`);
    if (fs.existsSync(metaFilePath)) {
      cli.blockLine(`Skipping icon "${icon.name}" as meta file already exists.`);
      const existingMeta = JSON.parse(
        fs.readFileSync(metaFilePath.replace(".ts", ".json"), "utf-8")
      );
      existingMeta.category.forEach((category) => globalCategory.add(category));
      existingMeta.tag.forEach((tag) => globalTag.add(tag));
      continue;
    }
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
      const metaFileContent = `
                export const meta = ${JSON.stringify(meta, null, 2)}
                export default meta;
            `;
      fs.writeFileSync(metaFilePath, metaFileContent);
      const metaFileJson = `${JSON.stringify(meta, null, 2)}`;
      fs.writeFileSync(metaFilePath.replace(".ts", ".json"), metaFileJson);
      meta.category.forEach((category) => globalCategory.add(category));
      meta.tag.forEach((tag) => globalTag.add(tag));
    }
  }
  cli.blockMid("global files");
  try {
    const categoryString = JSON.stringify(Array.from(globalCategory), null, 2);
    const categoryData = `export const categories = ${categoryString}`;
    fs.writeFileSync(path.join(__dirname, "categories.ts"), categoryData);
    cli.blockLineSuccess("categories.json is generated successfully.");
  } catch (error) {
    console.error("Error generating icon meta:", error);
  }
  try {
    const tagString = JSON.stringify(Array.from(globalTag), null, 2);
    const tagData = `export const tags = ${tagString}`;
    fs.writeFileSync(path.join(__dirname, "tags.ts"), tagData);
    cli.blockLineSuccess("tags.json is generated successfully.");
  } catch (error) {
    console.error("Error generating icon meta:", error);
  }
  // Create an index.ts file, which includes all the json files in the folder
  const indexFilePath = path.join(metaDirPath, "index.ts");
  const indexFileContent = `
    import { Icons } from "../icons/types";


export const getMeta = async (icon: Icons) => {
    switch(icon) {
        ${AllIcons.map(
          (icon) => `
        case Icons.${upperSnakeCase(icon.name)}:
            return (await import("./${icon.file.toLowerCase()}")).default;`
        ).join("\n")}
    }
      }`;
  fs.writeFileSync(indexFilePath, indexFileContent);
  cli.blockMid();
  cli.blockLineSuccess("Meta files generated successfully.");
  cli.blockFooter();
}
processIcons().catch((err) => console.error(err));
