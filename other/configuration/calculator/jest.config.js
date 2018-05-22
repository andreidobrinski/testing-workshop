module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock'),
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 18,
      branches: 10,
      functions: 19,
      lines: 18,
    },
  },
}

// collectCoverageFrom helps to not count test files in the coverage

// npm install --save-dev identity-obj-proxy
// use identity-obj-proxy for css modules

// if a module is running in both the server and the browser,
// test it in the browser.
// the more difficult environment is the browser
