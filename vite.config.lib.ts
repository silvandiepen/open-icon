
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";


export default defineConfig({
    plugins: 
        [vue(),
        dts({
            insertTypesEntry: true,
        })
    ],
    build: {
        outDir: 'lib',
        lib: {
            entry: {
                "open-icon": resolve(__dirname, '/src/icons/index.ts'),
            },
            formats: ['es', 'cjs']
        },
        emptyOutDir: true,
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                      @use "sass:math";
                      @import "./src/assets/style/base.scss";
                    `
            }
        }
    }

}
)