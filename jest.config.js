module.exports = {
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "verbose": true,
    "transform": {
       "^.+\\.js$": "<rootDir>/jest.transform.js"
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.jsx?$",
    "moduleFileExtensions": ["js", "json", "jsx", "node"],
    "moduleNameMapper": {'^.+\\.(css|less)$': '<rootDir>/CSSStub.js'},
    // "coverageThreshold": {
    //     "global": {
    //         "branches": 30,
    //         "functions": 90,
    //         "lines": 90,
    //         "statements": 90
    //     }
    // },
    "testEnvironment": "jsdom",
    setupFilesAfterEnv: ['./rtl.setup.js']
}