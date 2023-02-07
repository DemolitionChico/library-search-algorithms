/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    "ts-jest": {
      compiler: "typescript",
    },
  },
  testRegex: `.*/tests/.*.test.ts`,
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1"
  },
};