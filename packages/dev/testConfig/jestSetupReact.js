/* eslint-disable import/no-extraneous-dependencies */
const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18');

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions and React available in all test files without importing
global.React = React;
global.shallow = Enzyme.shallow;
global.render = Enzyme.render;
global.mount = Enzyme.mount;

// global mocks
// check for window since Jest environment is node in certain tests
if (typeof window !== 'undefined') {
  window.alert = jest.fn((msg) => console.log(msg));
}

// if (typeof global !== 'undefined') {
//   global.alert = jest.fn((msg) => console.log(msg));
// }
