const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    /** eslint */
    'eslint:recommended',

    /** eslint-plugin-jest */
    'plugin:jest/recommended',
    'plugin:jest/style',

    /** eslint-plugin-jest-dom */
    'plugin:jest-dom/recommended',

    /** eslint-plugin-cypress */
    'plugin:cypress/recommended',

    /** eslint-plugin-import */
    'plugin:import/recommended',

    /** eslint-plugin-react */
    'plugin:react/recommended',

    /** eslint-plugin-react-hooks */
    'plugin:react-hooks/recommended',

    /** eslint-plugin-jsx-a11y */
    'plugin:jsx-a11y/recommended',

    /** eslint-config-prettier : Avoid conflict with Prettier.*/
    'eslint-config-prettier'
  ],

  rules: {
    /***************************/
    /** eslint */
    /***************************/
    strict: ['error', 'never'],
    'no-unused-vars': 'off',
    'no-prototype-builtins': 'off',
    'no-debugger': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-alert': 'warn',
    'no-template-curly-in-string': 'warn',
    'block-scoped-var': 'warn',
    'default-case': 'warn',
    'default-case-last': 'warn',
    eqeqeq: 'warn',
    'guard-for-in': 'warn',
    'no-implicit-coercion': 'warn',
    'no-multi-spaces': 'warn',
    'no-tabs': 'warn',
    'no-duplicate-imports': 'warn',
    'object-shorthand': ['warn', 'always'],
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-rest-params': 'warn',
    'prefer-template': 'warn',
    'rest-spread-spacing': ['warn', 'never'],

    /***************************/
    /** eslint-plugin-react */
    /***************************/
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'react/jsx-key': ['warn', { checkFragmentShorthand: true }],
    'react/no-array-index-key': 'error',
    'react/jsx-fragments': 'warn',
    'react/jsx-no-bind': 'off',
    'react/no-deprecated': 'warn',
    'react/require-render-return': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/void-dom-elements-no-children': 'warn',
    'react/display-name': 'off',

    /***************************/
    /** eslint-plugin-jest */
    /***************************/
    'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
    'jest/expect-expect': 'off',
    'jest/lowercase-name': ['warn', { ignore: ['describe'] }],
    'jest/no-focused-tests': 'warn',
    'jest/prefer-to-be-null': 'warn',
    'jest/prefer-to-be-undefined': 'warn',

    /***************************/
    /** eslint-plugin-import */
    /***************************/
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

    /***************************/
    /** eslint-plugin-react-hooks */
    /***************************/
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
    'cypress/globals': true,
    worker: true,
    serviceworker: true
  },

  settings: {
    react: {
      version: 'detect'
    },
    /** eslint-import-resolver-webpack */
    'import/resolver': 'webpack'
  },

  overrides: [
    {
      /** eslint-plugin-jest */
      files: ['**/cypress/**/*.js'],
      rules: {
        'jest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }]
      }
    },
    {
      /** eslint-import-resolver-jest */
      files: ['**/__tests__/**/*.js', '*.test.js'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(process.cwd(), 'jest.config.js')
          }
        }
      }
    }
  ]
}
