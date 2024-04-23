import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

import AutoImport from "unplugin-auto-import/vite";

import Pages from "vite-plugin-pages";

export default defineConfig(async () => ({
  plugins: [
    vue(),

    Components({
      dirs: ["src"],
      resolvers: [
        NaiveUiResolver(),
      ],
    }),

    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          "@tauri-apps/api/app": ["getName", "getVersion", "getTauriVersion"],
          "@tauri-apps/api/shell": ["Command"],
          "@tauri-apps/api/os": ["platform"],
          "@tauri-apps/api/notification": ["sendNotification", "requestPermission", "isPermissionGranted"]
        }
      ],
    }),

    Pages({
      dirs: ["src/views"],
      extensions: ["vue", 'tsx']
    }),
  ],

  clearScreen: false,

  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },

  resolve: {
    alias: {
      "@": "/src",
    }
  }
}));
