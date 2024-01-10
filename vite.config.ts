import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        target: "esnext",
        rollupOptions: {},
      },
    server: {
        port: 8080
    },
    plugins: [vue()],  
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
})
