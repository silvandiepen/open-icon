import OpenAI from "openai";
import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import * as cli from "cli-block";

import { upperSnakeCase } from "@sil/case";

//@ts-ignore
import dotenv from 'dotenv';

// @ts-ignore
import IconList from '../../src/icons/list.json'  assert { type: 'json' };

dotenv.config();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// const Icons = {
//     ABC: "abc",
//     ACCESSIBILITY: "accessibility",
//     ALARM: "alarm",
//     // Add more icons as needed
// };

interface IconMeta {
    description: string;
    category: string[];
    tag: string[];
}

// Initialize OpenAI client with API key

const AllIcons = IconList.icons;

// @ts-ignore
const openai = new OpenAI(process.env.OPENAI_API_KEY);

interface ErrorMeta {
    description: string;
    error: any;
    apiResponse: string;
}

async function generateIconMeta(iconName: string): Promise<IconMeta | ErrorMeta | undefined> {
    // async function generateIconMeta(iconName: string) {
    const prompt = `Given an icon named "${iconName}", write a short description, tags (at least 10), a few categories and a title (Readable version of the icon name). This is the return type you need to give me: \`\`\`{ description: string, category: string[], tag: string[], title: string }\`\`\`. This is a list of all the available categories: [Arrows, Accessibility, Shapes, Animals, Media, Text, Document, Transport, Interface, Symbol, Tile, Weather], more can be added. Make sure the response is valid json.`;

    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });


        const text = (response.choices[0].message?.content?.trim() || '');

        try {
            // remove trailing comma, which happens occasionally
            const regexTrailingComma: RegExp = /\,(?!\s*?[\{\[\"\'\w])/g;

            // remove quotes around json
            const regexQuotesJson: RegExp = /^```json\s*\n|\s*\n```$/g;
            const regexQuotes: RegExp = /^```\s*\n|\s*\n```$/g;

            const parsed = JSON.parse(text.replace(regexQuotesJson, '').replace(regexQuotes, '').replace(regexTrailingComma, ''));

            return {
                ...parsed,
                description: parsed.description,
                category: parsed.category || parsed.categories || [],
                tag: parsed.tags || parsed.tag || []
            } as IconMeta

        } catch (err) {
            return { description: `Description generation failed, icon :: ${iconName}`, error: err, apiResponse: text }
        }
    } catch (error) {
        return { description: `Description generation failed, icon :: ${iconName}`, error, apiResponse: '' }
    }
}

async function processIcons() {
    let globalCategory = new Set<string>();
    let globalTag = new Set<string>();


    cli.blockHeader('Icon Meta Generation');

    const metaDirPath = path.join(__dirname, 'icons');
    if (!fs.existsSync(metaDirPath)) {
        fs.mkdirSync(metaDirPath, { recursive: true });
    }

    for (const iconName of AllIcons) {

        await cli.blockMid(iconName);
        const metaFilePath = path.join(metaDirPath, `${iconName.toLowerCase()}.ts`);

        if (fs.existsSync(metaFilePath)) {
            cli.blockLine(`Skipping icon "${iconName}" as meta file already exists.`);

            const existingMeta: IconMeta = JSON.parse(fs.readFileSync(metaFilePath.replace('.ts', '.json'), 'utf-8'));
            existingMeta.category.forEach(category => globalCategory.add(category));
            existingMeta.tag.forEach(tag => globalTag.add(tag));
            continue;
        }


        const meta = await generateIconMeta(iconName);

        if (!meta) return;

        if ((meta as ErrorMeta).error) {
            const m = (meta as ErrorMeta);
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
            fs.writeFileSync(metaFilePath.replace('.ts', '.json'), metaFileJson);

            (meta as IconMeta).category.forEach(category => globalCategory.add(category));
            (meta as IconMeta).tag.forEach(tag => globalTag.add(tag));

        }

    }

    cli.blockMid('global files');
    try {
        const categoryString = JSON.stringify(Array.from(globalCategory), null, 2)
        const categoryData = `export const categories = ${categoryString}`;
        fs.writeFileSync(path.join(__dirname, 'categories.ts'), categoryData);
        cli.blockLineSuccess("categories.json is generated successfully.");
    } catch (error) {
        console.error("Error generating icon meta:", error);
    }
    try {
        const tagString = JSON.stringify(Array.from(globalTag), null, 2)
        const tagData = `export const tags = ${tagString}`;
        fs.writeFileSync(path.join(__dirname, 'tags.ts'), tagData);
        cli.blockLineSuccess("tags.json is generated successfully.");

    } catch (error) {
        console.error("Error generating icon meta:", error);
    }



    // Create an index.ts file, which includes all the json files in the folder

    const indexFilePath = path.join(metaDirPath, 'index.ts');
    const indexFileContent = `
    ${AllIcons.map((icon: string) => `import ${upperSnakeCase(icon)}_META from './${icon.toLowerCase()}';`).join('\n')}

    export const meta = {
        ${AllIcons.map((icon: string) => `${upperSnakeCase(icon)}: ${upperSnakeCase(icon)}_META`).join(',\n')}
    }`;

    fs.writeFileSync(indexFilePath, indexFileContent);



    cli.blockMid();
    cli.blockLineSuccess("Meta files generated successfully.");
    cli.blockFooter();
}

processIcons().catch(err => console.error(err));
