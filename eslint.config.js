const js = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const jest = require('eslint-plugin-jest');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = defineConfig([
  {
    ignores: ['temp/**', 'dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['src/tests/**/*.ts'],
    extends: [jest.configs['flat/recommended'], jest.configs['flat/style']],
    rules: {
      'jest/require-to-throw-message': 'error',
    },
  },
]);
