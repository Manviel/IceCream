import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';
import eslint from 'vite-plugin-eslint';

// Polyfill for structuredClone
if (typeof structuredClone === 'undefined') {
  globalThis.structuredClone = (value) => {
    return JSON.parse(JSON.stringify(value));
  };
}

export default defineConfig({
  plugins: [solidPlugin(), solidSvg(), eslint()],
  build: {
    target: 'esnext',
  },
});
