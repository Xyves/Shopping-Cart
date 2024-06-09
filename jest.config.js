module.exports = {
  // Indicates which environment should be used for testing
  testEnvironment: "jsdom",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "node"],

  // Transform files with babel-jest
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // Setup files before Jest tests are run
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // A map from regular expressions to paths to transformers
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  // A list of paths to modules that run some code to configure or set up the testing framework
  setupFiles: ["./jest.setup.js"], // If you have any setup files

  // An array of regexp pattern strings that are matched against all test paths before executing the test
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  // The root directory that Jest should scan for tests and modules within
  rootDir: ".",

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
