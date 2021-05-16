/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 100,
      lines: 100,
      statements: 60,
    },
  },
};
