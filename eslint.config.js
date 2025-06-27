import js from '@eslint/js';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginCypress from 'eslint-plugin-cypress';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        module: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly',
      },
      sourceType: 'module',
    },
    plugins: {
      import: eslintPluginImport,
      cypress: eslintPluginCypress,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'import/no-unresolved': 'off',
    },
  },
];
