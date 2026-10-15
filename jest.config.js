/** @type {import('jest').Config} */
module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        "runtime": "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["@babel/preset-react", "@babel/preset-typescript"] }],
  },
  testMatch: [
    "<rootDir>/**/*.test.?(ts|tsx)",
    "<rootDir>/**/*.spec.?(ts|tsx)",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};