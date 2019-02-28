module.exports =  {
  extends:  [
    '../../.eslintrc.js'
  ],
  settings: {
    'import/resolver': 'node'
  },
  rules: {
    'import/no-unresolved': 0 // turning off due to IDE bug. IDE typescript linting is working as a temp substitute
  }
};
