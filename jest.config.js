module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  rootDir: ".",
  globalSetup: "./test/jestGlobalSetup.js",
  setupFiles: [
    "./test/jestSetup.ts",
  ],
  verbose: false,
  testEnvironment: 'node',

  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: [
    "/mocks/",
    "/dist/"
  ],
  // see https://jestjs.io/docs/en/mock-function-api.html#mockfnmockclear
  clearMocks: true,

  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "outputPath": "./artifacts/test/test-report.html"
    }]
  ],

  // COVERAGE
  coverageDirectory: "artifacts/coverage",
  collectCoverage: false,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/server.ts",
    "!**/types/**",
    "!**/interfaces/**",
    "!**/*Interface.ts",
    "!**/*.interface.ts",
    "!**/*.d.ts"
  ],
  coverageReporters: ["text", "text-summary", "lcov", "json-summary"],

  // MODULES
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^@middleware/(.*)$": "<rootDir>/src/middleware/$1",
    "^@model/(.*)$": "<rootDir>/src/model/$1",
    "^@error/(.*)$": "<rootDir>/src/error/$1",
    "^@service/(.*)$": "<rootDir>/src/service/$1",
    "^@util/(.*)$": "<rootDir>/src/util/$1",
    "^@api/(.*)$": "<rootDir>/src/api/$1"
  },
};
