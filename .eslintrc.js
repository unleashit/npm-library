module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // project: "./tsconfig.json"
  },

  // added to please ESlint 6 compat with typescript + airbnb
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },

  rules: {
    '@typescript-eslint/no-var-requires': 0, // to be compatible with JS/Node config files
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    // 'no-unused-vars': [2, { "argsIgnorePattern": "^_" }],
    'no-console': process.NODE_ENV === 'production' ? 2 : 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
    'class-methods-use-this': 0,
    'no-alert': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 1,
    'react/destructuring-assignment': 0,
    'no-plusplus': 0,
    'react/sort-comp': 0, // temp
    'no-return-await': 0, // temp
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // quotes and apostrophes as entities are onerous
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    'react/state-in-constructor': [2, 'never'],
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,

    // added to please ESlint 6 compat with typescript + airbnb
    'import/extensions': 0,

    // allow any for now
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },

  // overrides for test files
  // overrides: [
  //   {
  //     files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
  //     rules: {
  //       // 'no-unused-expressions': 'off',
  //       'react/jsx-props-no-spreading': 0,
  //     },
  //   },
  // ],
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
};
