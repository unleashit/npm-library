module.exports = {
  extends: ['../../.eslintrc.js'],
  env: {
    commonjs: true,
  },
  globals: {
    React: true,
  },
  rules: {
    // default docusaurus code uses global require
    'global-require': 0,
    // prevent webpack aliases causing linting errrors
    // https://stackoverflow.com/questions/70051976/how-can-i-get-eslint-to-recognize-docusaurus-aliases
    'import/no-unresolved': [
      2,
      { ignore: ['^@theme', '^@docusaurus', '^@site'] },
    ],
  },
};
