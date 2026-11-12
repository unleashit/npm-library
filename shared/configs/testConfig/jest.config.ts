export const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/coverage/'],
  setupFilesAfterEnv: [
    '<rootDir>/../../shared/configs/testConfig/jestSetupReact.ts',
  ],
  // url: 'http://localhost/',
  // TS 6 stopped auto-including `@types/*`, so ts-jest compiles specs with the
  // project's test tsconfig, which opts into jest + jest-dom global types.
  transform: {
    '\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
    '\\.jsx?$': 'babel-jest',
  },
  // testMatch: null,
  testRegex: '(\\.|/)(test|spec)\\.(jsx?|tsx?)$',
  //  collectCoverageFrom: ['<rootDir>/src/**/*.test.{ts,tsx,js,jsx}'],
  transformIgnorePatterns: ['<rootDir>/(config|dist|node_modules)/'],
  // setupFiles: [`${__dirname}/../../../node_modules/regenerator-runtime/runtime`],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      '<rootDir>/../../shared/configs/testConfig/__mocks__/fileMock.js',
    '\\.(css|scss)$':
      '<rootDir>/../../shared/configs/testConfig/__mocks__/styleMock.js',
  },
  verbose: true,
};
