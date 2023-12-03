module.exports = {
  extends: ['../../.eslintrc.js'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'import/no-unresolved': 0, // turning off due to IDE bug. IDE typescript linting is working as a temp substitute
    'react/prefer-stateless-function': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
  },
};
