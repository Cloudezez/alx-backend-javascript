module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Enforce the use of === and !== over == and !=
    'eqeqeq': ['error', 'always'],
    
    // Disallow the use of console
    'no-console': 'warn',

    // Require semicolons at the end of statements
    'semi': ['error', 'always'],

    // Enforce consistent indentation (2 spaces)
    'indent': ['error', 2],

    // Enforce a maximum line length of 80 characters
    'max-len': ['error', { code: 80 }],

    // Disallow unused variables
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Enforce camelCase naming convention
    'camelcase': ['error', { properties: 'always' }],
  },
};

