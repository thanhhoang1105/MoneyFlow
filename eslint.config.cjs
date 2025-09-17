// Flat config for ESLint v9
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: { JSX: 'readonly' },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Essential rules only
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
];
