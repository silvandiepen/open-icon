
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({

    build: {
        outDir: 'lib',
        cssCodeSplit: false,
        lib: {
            entry: resolve(__dirname, 'src/icons/index.ts'),
            name: 'OpenIcon',
            formats: ['es', 'cjs'],
            fileName: 'open-icon'
        }
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
})