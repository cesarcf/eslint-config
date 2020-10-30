const { getWpModuleResolver } = require('./utils')
const { wpAlias, wpExtensions } = getWpModuleResolver()

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    /** Rules recommended for Javascript */
    'eslint:recommended',

    /** eslint-plugin-jest */
    'plugin:jest/recommended',
    'plugin:jest/style',

    /** eslint-plugin-import */
    'plugin:import/recommended',

    /** eslint-plugin-react */
    'plugin:react/recommended',

    /** eslint-plugin-react-hooks */
    'plugin:react-hooks/recommended',

    /** eslint-config-prettier : Avoid conflict with Prettier.*/
    'eslint-config-prettier'
  ],

  // Rules of ESLint (overwrite extends rules)
  rules: {
    strict: ['error', 'never'],
    'no-irregular-whitespace': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'no-debugger': 'warn',
    'no-prototype-builtins': 'off',

    /** eslint-plugin-jest */
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'test'
      }
    ],
    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 300 }],
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-expect': 'error',

    /** eslint-plugin-import */
    // "import/newline-after-import": ["error", { "count": 4 }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@**/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['react**'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],

    /** eslint-plugin-react-hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
    worker: true,
    serviceworker: true
  },

  settings: {
    react: {
      version: 'detect'
    },
    /** eslint-import-resolver-alias */
    'import/resolver': {
      alias: {
        map: wpAlias,
        extensions: wpExtensions
      }
    }
  }
}
