// eslint.config.js
import { defineConfig } from 'eslint/config';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default defineConfig({
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      ecmaFeatures: { jsx: true },
      requireConfigFile: false,
    },
  },
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    import: importPlugin,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'no-undef': 'error',
    'import/no-unresolved': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
    ],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
  },
});
