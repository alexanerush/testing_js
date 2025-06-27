export default [
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          console: 'readonly',
          process: 'readonly',
          module: 'readonly',
          require: 'readonly',
          __dirname: 'readonly',
          cy: 'readonly',
          Cypress: 'readonly',
          describe: 'readonly',
          it: 'readonly',
          expect: 'readonly',
          beforeEach: 'readonly',
        },
      },
      rules: {
        'no-console': 'off', 
      },
    },
  ]
  