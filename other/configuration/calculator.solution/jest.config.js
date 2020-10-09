module.exports = {
  displayName: 'calculator',
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js',
  ),
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  // normally you'd put this here, only add coverage from src folder
  // collectCoverageFrom: ['**/src/**/*.js'],
  // coverage threshold
  // coverageThreshold: {
  //   global: {statements: 18},
  //   branches: 10,
  //   functions: 19,
  //   lines: 18,
  // },
}

// however, that kinda messes up my setup in this workshop repo
// so I'm doing this weird thing. Basically ignore this and just
// do it inline like I show above :)
if (process.cwd() === __dirname) {
  Object.assign(module.exports, {
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
      global: {
        statements: 17,
        branches: 8,
        functions: 20,
        lines: 17,
      },
    },
  })
}
