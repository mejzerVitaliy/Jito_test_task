/** @type {import('ts-jest').JestConfig} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  globals: {
      'ts-jest': {
          tsconfig: 'tsconfig.json',
      },
  },
};
