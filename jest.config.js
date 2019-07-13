module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/coverage/'],
  setupFilesAfterEnv: ["<rootDir>/../../jestSetupReact.js"],
  testURL: "http://localhost/",
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest"
  },
  // testMatch: null,
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}"
  ],
  transformIgnorePatterns: [
    "<rootDir>/(config|dist|node_modules)/"
  ],
  setupFiles: [`${__dirname}/node_modules/regenerator-runtime/runtime`],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/../../__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.svg$": "@svgr/webpack"
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  }
};
