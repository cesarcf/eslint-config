/************************************************************
 * Javascript Style-guide ESLint rules         *
 ************************************************************/
const prettierConfig = require("./.prettierrc.js");

module.exports = {
  /****************************************************
    basedOn: 
        "https://prettier.io/docs/en/comparison.html",
        "https://google.github.io/styleguide/jsguide.html#naming",
        "https://github.com/suchipi/eslint-config-unobtrusive#rationale"
    ************************************************************/

  env: {
    node: true, // prevents errors: "require/module is not defined  no-undef"
    "jest/globals": true,
  },

  settings: {
    "jest": {
      "version": "detect"
    }
  },

  // We add new rule categories to eslint via plugins
  plugins: ["prettier", "node", "jest"],

  // The linter has 3 main sets of rules: 1 prettier, 2 unobtrusive, 3 naming-conventions
  extends: ["plugin:prettier/recommended", "unobtrusive"],

  rules: {
    /***********************************************************************
     *                    PRETTIER  (formatting-rules)                     *
     *  The following rule overrides some of the default prettier config   *
     **********************************************************************/
    "prettier/prettier": ["error", prettierConfig],
    /***********************************************************************
     *                    PRETTIER END                                     *
     ***********************************************************************/

    /************************************************************************
     *                 UNOBTRUSIVE  (code-quality rules)                    *
     *  The following rules override some of the default unobtrusive rules  *
     ***********************************************************************/
    // console.log calls issue warnings
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // debugger sentences issue errors
    "no-debugger": "error",
    // Allow unused vars as method params or prefixed by _
    "no-unused-vars": ["warn", { args: "none", varsIgnorePattern: "^_" }],
    // Node related rules
    "node/global-require": "warn",
    "node/no-deprecated-api": "error",
    /**********************************************************************
     *                 UNOBTRUSIVE END                                    *
     *********************************************************************/

    /**********************************************************************
     *                   NAMING-CONVENTIONS RULES                         *
     *             Based on Google JavaScript Style Guide                 *
     *********************************************************************/
    // https://google.github.io/styleguide/jsguide.html#naming-rules-by-identifier-type
    camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
    // https://google.github.io/styleguide/jsguide.html#naming-class-names
    "new-cap": ["error", { newIsCap: true, capIsNew: false }],
    /**********************************************************************
     *                   NAMING-CONVENTIONS RULES END                     *
     *********************************************************************/


    /**********************************************************************
     *             Recommended rules for jest tests                       *
     *    https://github.com/jest-community/eslint-plugin-jest#rules      *
     *********************************************************************/
    "jest/expect-expect": "warn",
    "jest/no-alias-methods": "warn",
    "jest/no-commented-out-tests": "warn",
    "jest/no-deprecated-functions": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-done-callback": "error",
    "jest/no-duplicate-hooks": "error",
    "jest/no-export": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-if": "error",
    "jest/no-interpolation-in-snapshots": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-standalone-expect": "error",
    "jest/no-test-return-statement": "error",
    "jest/prefer-comparison-matcher": "error",
    "jest/prefer-equality-matcher": "error",
    "jest/prefer-spy-on": "warn",
    "jest/prefer-strict-equal": "warn",
    "jest/prefer-to-be": "error",
    "jest/prefer-to-contain": "error",
    "jest/prefer-to-have-length": "error",
    "jest/prefer-todo": "error",
    "jest/require-to-throw-message": "error",
    "jest/require-top-level-describe": "error",
    "jest/valid-describe-callback": "error",
    "jest/valid-expect": "error",
    "jest/valid-title": "error",
  }

};
