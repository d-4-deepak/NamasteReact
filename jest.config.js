/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",

  // Handle TS and JSX files with babel-jest or ts-jest
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },

  // Add moduleFileExtensions so Jest can resolve them
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],

  // Recognize test file patterns
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // Optional: ignore transforming node_modules
  transformIgnorePatterns: [
    "/node_modules/"
  ],

  // Optional: setup files after env for tools like @testing-library/react
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Optional: coverage from only src files
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
};

module.exports = config;
