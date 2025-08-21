// jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|mts)$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.test.json' }],
  },
  moduleFileExtensions: ['ts', 'mts', 'js', 'mjs'],
  extensionsToTreatAsEsm: ['.ts', '.mts'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.mjs$': '$1',
  },
};