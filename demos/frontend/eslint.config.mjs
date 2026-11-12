import js from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

/**
 * This demo intentionally uses a lighter ruleset than the library packages
 * (it was `root: true` in the old eslintrc setup). ESLint 10 only reads flat
 * configs, and a config here takes precedence for this directory.
 *
 * react-hooks v7 ships extra React Compiler rules (`purity`, `immutable`, ...)
 * via `configs['recommended-latest']`; keeping the two rules the previous config
 * enabled so a lint run stays comparable to the old baseline.
 */
export default [
  { ignores: ['dist', 'storybook-static', 'node_modules'] },
  js.configs.recommended,
  ...tsEslint.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
    },
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
    },
  },

  // Storybook config files register addons as side effects, so they are not
  // fast-refresh friendly by design
  {
    files: ['.storybook/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 0,
    },
  },

  // must stay last: it disables rules-of-hooks for `*.stories.*` (Storybook render
  // functions legitimately call hooks) and adds story-specific linting
  ...(storybook.configs['flat/recommended'] ?? []),
];
