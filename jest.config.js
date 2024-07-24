module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.ts?(x)', '<rootDir>/src/**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '^.+\\\\.tsx?$': 'ts-jest',
  },
};
