module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
  rootDir: 'src',
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
};
