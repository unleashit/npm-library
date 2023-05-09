module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'import', 'react-hooks', 'simple-import-sort'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    // 'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
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
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
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

    // 'simple-import-sort/sort': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'consistent-return': 0,

    // rule introduced after an eslint update.
    // fix bug where importing React caused this error
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': ['error'],

    // rule introduced after an eslint update
    // fix bug relating to double destructuring props not using prop-types anyway
    'react/no-unused-prop-types': 0,

    // rule introduced after an eslint update
    // Shouldn't be needed since default function params are used instead of default props
    'react/require-default-props': 0,

    // rule introduced after airbnb update
    'react/function-component-definition': 0,

    // temp solution for moving dev deps into own package
    'import/no-extraneous-dependencies': 0,

    // rule introduced after update
    // requires proptypes so doesn't make sense in a typescript project
    'react/default-props-match-prop-types': 0,

    // upgrade caused: TypeError: Cannot read properties of undefined (reading 'getTokens')
    // turning off for now since it crashes IDE
    '@typescript-eslint/no-empty-function': 0,
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
