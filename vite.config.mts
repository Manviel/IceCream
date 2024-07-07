import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [solidPlugin(), solidSvg(), eslintPlugin()],
  build: {
    target: 'esnext'
  }
});
