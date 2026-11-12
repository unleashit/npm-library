/**
 * Jest setup for every browser (jsdom) test project.
 *
 * Enzyme had no React 19 adapter, so the suites use React Testing Library:
 * tests query the rendered DOM instead of the component tree, which means
 * there is no adapter to configure and no snapshot serializer to register.
 */
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import React from 'react';

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

// React stays available globally for the older `.js` test files
(globalThis as any).React = React;

// RTL appends to document.body, so unmount between tests to avoid leakage
afterEach(() => {
  cleanup();
});

// global mocks
// check for window since Jest environment is node in certain tests
if (typeof window !== 'undefined') {
  window.alert = jest.fn((msg: unknown) => console.log(msg));
}
