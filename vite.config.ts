import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// @ts-ignore
import { viteStaticCopy } from 'vite-plugin-static-copy'


import link from '@yankeeinlondon/link-builder'
import code from '@yankeeinlondon/code-builder'
import meta from '@yankeeinlondon/meta-builder'

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        target: "esnext",
        rollupOptions: {},
    },
    // assetsInclude: ['**/*.md'],
    server: {
        port: 8080
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/], // <--
        }),     
       Markdown({
        builders: [link(),code(),meta()]
       }),
       viteStaticCopy({
        targets: [
          {
            src: resolve(__dirname, './src/assets/icons/icons/'),
            dest: './', 
          },
        ],
      }),
    ],
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
