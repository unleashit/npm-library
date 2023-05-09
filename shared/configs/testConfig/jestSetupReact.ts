/* eslint-disable import/no-extraneous-dependencies */
const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18').default;

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions and React available in all test files without importing
(global as any).React = React;
(global as any).shallow = Enzyme.shallow;
(global as any).render = Enzyme.render;
(global as any).mount = Enzyme.mount;

// global mocks
// check for window since Jest environment is node in certain tests
if (typeof window !== 'undefined') {
  window.alert = jest.fn((msg) => console.log(msg));
}

// if (typeof global !== 'undefined') {
//   global.alert = jest.fn((msg) => console.log(msg));
// }
