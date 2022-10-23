import { defineConfig, loadEnv } from "vite"
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
      base: process.env.APP_BASE,
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
      plugins: [vue()]
  });
};
