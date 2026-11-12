import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * ESLint 9+ only reads flat configs, but `airbnb` is still an eslintrc config.
 * FlatCompat converts it and `fixupConfigRules`/`fixupPluginRules` patch the
 * legacy plugin APIs (e.g. `context.getFilename`) that ESLint 10 removed.
 */
const compat = new FlatCompat({ baseDirectory: dirname });

const legacyConfigs = fixupConfigRules(
  compat.extends(
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
  ),
);

const rootRules = {
  '@typescript-eslint/no-var-requires': 0, // to be compatible with JS/Node config files
  '@typescript-eslint/no-require-imports': 0, // renamed from no-var-requires in typescript-eslint v8
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/explicit-member-accessibility': 0,
  '@typescript-eslint/no-unused-vars': [
    2,
    { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/explicit-function-return-type': 0,
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

  // added to please ESLint compat with typescript + airbnb
  'import/extensions': 0,

  // allow any for now
  '@typescript-eslint/explicit-module-boundary-types': 0,

  'no-unused-expressions': ['error', { allowShortCircuit: true }],
  '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
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
};

const sharedLanguageOptions = {
  ecmaVersion: 2022,
  sourceType: 'module',
  globals: { ...globals.browser, ...globals.jest },
};

/**
 * webpack aliases and workspace imports are resolved by tsconfig `paths`, which
 * eslint-plugin-import's node resolver cannot see.
 * turning off due to IDE bug. IDE typescript linting is working as a temp substitute
 */
const workspaceImportRules = { 'import/no-unresolved': 0 };

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/storybook-static/**',
      '**/.nx/**',
      '**/.docusaurus/**',
      '**/*.min.js',
    ],
  },

  ...legacyConfigs,

  {
    files: ['**/*.{js,cjs,mjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ...sharedLanguageOptions,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    // Redefining a plugin that the converted airbnb config already registered is a
    // hard error, so only wrap the ones whose legacy APIs ESLint 10 dropped.
    plugins: {
      react: fixupPluginRules(reactPlugin),
      'react-hooks': fixupPluginRules(reactHooks),
      'simple-import-sort': simpleImportSort,
    },
    // added to please ESLint compat with typescript + airbnb
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
      react: { version: 'detect' },
    },
    rules: rootRules,
  },

  // every workspace package resolves imports through tsconfig paths
  {
    files: ['packages/**/*.{js,jsx,ts,tsx}', 'shared/**/*.{js,jsx,ts,tsx}'],
    rules: workspaceImportRules,
  },

  // node based projects
  {
    files: ['demos/backend/**/*.{js,jsx,ts,tsx}', 'demos/archiveFrontend/**/*.{js,jsx,ts,tsx}'],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
    rules: {
      ...workspaceImportRules,
      'react/prefer-stateless-function': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
    },
  },

  // shared/docs is docusaurus: commonjs config files + theme/alias imports
  {
    files: ['shared/docs/**/*.{js,jsx,ts,tsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.jest, React: 'writable' } },
    rules: {
      // default docusaurus code uses global require
      'global-require': 0,
      // prevent webpack aliases causing linting errors
      // https://stackoverflow.com/questions/70051976/how-can-i-get-eslint-to-recognize-docusaurus-aliases
      'import/no-unresolved': [2, { ignore: ['^@theme', '^@docusaurus', '^@site'] }],
    },
  },

  // config files run in node
  {
    files: [
      '**/*.config.{js,cjs,mjs,ts}',
      '**/.storybook/**/*.{js,jsx,ts,tsx}',
      'shared/configs/**/*.{js,cjs,mjs,ts}',
    ],
    languageOptions: { globals: { ...globals.node } },
  },

  // jest setup/helpers live outside src/ and use the node + jest environments
  {
    files: ['**/jest.{setup,helpers}.{js,ts}', '**/__tests__/**/*.{js,ts,tsx}'],
    languageOptions: { globals: { ...globals.node, ...globals.jest } },
  },
];
