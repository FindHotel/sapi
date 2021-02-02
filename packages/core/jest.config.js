module.exports = {
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).+(ts|tsx|js)'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  }
}
