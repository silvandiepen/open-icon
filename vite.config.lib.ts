
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({

    build: {
        outDir: 'lib',
        lib: {
            entry: resolve(__dirname, 'src/icons/index.ts'),
            name: 'OpenIcon',
            formats: ['es', 'cjs'],
            fileName: 'open-icon'
          }
        // outDir: 'lib',
        // lib: {
        //     entry: {
        //         "open-icon": resolve(__dirname, '/src/icons/index.ts'),
        //     },
        //     formats: ['es', 'cjs']
        // },
        // emptyOutDir: true,
        // rollupOptions: {
        //     external: ["vue"],
        //     output: {
        //         globals: {
        //             vue: "Vue",
        //         },
        //     },
        // },
    },
    plugins:    [
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