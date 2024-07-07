export default [
  {
    rules: {
      'prefer-const': 'error'
    }
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    ignores: ['**/node_modules/*', 'dist/*']
  }
];
