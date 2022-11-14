
import { fileURLToPath } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";
import pluginYaml from 'vite-plugin-yaml2'

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    hmr: {
      host: "localhost"
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    vue(),
    pluginYaml(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    })
  ]
})
