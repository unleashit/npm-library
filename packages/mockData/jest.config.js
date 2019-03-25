module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/coverage/'],
  testURL: "http://localhost/",
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest"
  },
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx, ts, tsx}"
  ],
  transformIgnorePatterns: [
    "<rootDir>/(config|dist|node_modules)/"
  ],
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
  }
};
