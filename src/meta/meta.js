import OpenAI from "openai";
import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import * as cli from "cli-block";
import { upperSnakeCase } from "@sil/case";
//@ts-ignore
import dotenv from 'dotenv';
// @ts-ignore
import IconList from '../../src/icons/list.json' assert { type: 'json' };
dotenv.config();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Initialize OpenAI client with API key
const AllIcons = IconList.icons;
// @ts-ignore
const openai = new OpenAI(process.env.OPENAI_API_KEY);
async function generateIconMeta(iconName) {
    // async function generateIconMeta(iconName: string) {
    const prompt = `Given an icon named "${iconName}", write a short description, suggest categories, and list tags associated with it as a json object. Also add a title, with a normal version of the name. This is a list of all the available categories: [Arrows, Accessibility, Shapes, Animals, Media, Text, Document, Transport, Interface, Symbol, Tile, Weather] `;
    try {
        const response = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });
        const text = response.choices[0].message?.content?.trim() || '';
        return JSON.parse(text);
    }
    catch (error) {
        console.error("Error generating icon meta:", error);
        return { description: "Description generation failed", categories: [], tags: [] };
    }
}
async function processIcons() {
    let globalCategories = new Set();
    let globalTags = new Set();
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
            // const existingMeta: IconMeta = JSON.parse(fs.readFileSync(metaFilePath, 'utf-8'));
            // existingMeta.categories.forEach(category => globalCategories.add(category));
            // existingMeta.tags.forEach(tag => globalTags.add(tag));
            continue;
        }
        //  await generateIconMeta(iconName);
        const meta = await generateIconMeta(iconName);
        await cli.blockSettings(meta);
        const metaFileContent = `export default ${JSON.stringify(meta, null, 2)}`;
        fs.writeFileSync(metaFilePath, metaFileContent);
        meta.categories.forEach(category => globalCategories.add(category));
        meta.tags.forEach(tag => globalTags.add(tag));
    }
    cli.blockMid('global files');
    try {
        const categoryString = JSON.stringify(Array.from(globalCategories), null, 2);
        const categoryData = `export const categories = ${categoryString}`;
        fs.writeFileSync(path.join(__dirname, 'categories.ts'), categoryData);
        cli.blockLineSuccess("categories.json is generated successfully.");
    }
    catch (error) {
        console.error("Error generating icon meta:", error);
    }
    try {
        const tagsString = JSON.stringify(Array.from(globalTags), null, 2);
        const tagsData = `export const tags = ${tagsString}`;
        fs.writeFileSync(path.join(__dirname, 'tags.ts'), tagsData);
        cli.blockLineSuccess("tags.json is generated successfully.");
    }
    catch (error) {
        console.error("Error generating icon meta:", error);
    }
    // Create an index.ts file, which includes all the json files in the folder
    const indexFilePath = path.join(metaDirPath, 'index.ts');
    const indexFileContent = `
    ${AllIcons.map((icon) => `import * as ${upperSnakeCase(icon)}_META from './${icon.toLowerCase()}';`).join('\n')}

    export const meta = {
        ${AllIcons.map((icon) => `${upperSnakeCase(icon)}: ${upperSnakeCase(icon)}_META`).join(',\n')}
    }`;
    fs.writeFileSync(indexFilePath, indexFileContent);
    cli.blockMid();
    cli.blockLineSuccess("Meta files generated successfully.");
    cli.blockFooter();
}
processIcons().catch(err => console.error(err));
