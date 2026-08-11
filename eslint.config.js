const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const jest = require('eslint-plugin-jest');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = [
  {
    ignores: ['temp/**', 'dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  ...tseslint.configs['flat/recommended'],
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2023,
      },
    },
  },
  {
    files: ['src/tests/**/*.ts'],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      ...jest.configs['flat/style'].rules,
      'jest/require-to-throw-message': 'error',
    },
  },
];
