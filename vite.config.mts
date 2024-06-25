import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [solidPlugin(), solidSvg(), eslint()],
  build: {
    target: 'esnext',
  },
});
