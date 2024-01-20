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
    jest: {
      version: "detect",
    },
  },

  // We add new rule categories to eslint via plugins
  plugins: ["prettier", "node", "jest", "@typescript-eslint"],

  // The linter has 4 main sets of rules: 1 prettier, 2 unobtrusive
  // 3 naming-conventions, 4 typescript specific code-quality rules
  extends: ["plugin:prettier/recommended", "unobtrusive", "plugin:@typescript-eslint/recommended"],

  rules: {
    /***********************************************************************
     *                    PRETTIER  (formatting-rules)                     *
     *  The following rule overrides some of the default prettier config   *
     **********************************************************************/
    "prettier/prettier": ["error", prettierConfig],
    /***********************************************************************
     *                          PRETTIER END                               *
     ***********************************************************************/

    /************************************************************************
     *                 UNOBTRUSIVE  (code-quality rules)                    *
     *  The following rules override some of the default unobtrusive rules  *
     ***********************************************************************/
    // console.log calls issue warnings
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // debugger sentences issue errors
    "no-debugger": "error",
    // Node related rules
    "node/global-require": "warn",
    "node/no-deprecated-api": "error",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
        minimumDescriptionLength: 20,
      },
    ],
    /**********************************************************************
     *                 UNOBTRUSIVE END                                    *
     *********************************************************************/

    /**********************************************************************
     *                   NAMING-CONVENTIONS RULES                         *
     *             Based on Google JavaScript Style Guide                 *
     *********************************************************************/
    // https://google.github.io/styleguide/tsguide.html#identifiers
    // https://google.github.io/styleguide/tsguide.html#naming-style
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: ["variable"],
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "parameter",
        format: ["camelCase"],
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: ["enumMember"],
        format: ["UPPER_CASE"],
      },
      {
        selector: "property",
        format: ["camelCase"],
        filter: { regex: "\\d+", match: false },
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        modifiers: ["destructured"],
        format: null,
      },
    ],
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
  },

  /***************************************************************************
   *          CODE QUALITY TYPESCRIPT SPECIFIC RULES                         *
   *  the set @typescript-eslint/eslint-recommended has to be an overrides   *
   **************************************************************************/
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        "constructor-super": "off", // ts(2335) & ts(2377)
        "getter-return": "off", // ts(2378)
        "no-const-assign": "off", // ts(2588)
        "no-dupe-args": "off", // ts(2300)
        "no-dupe-class-members": "off", // ts(2393) & ts(2300)
        "no-dupe-keys": "off", // ts(1117)
        "no-func-assign": "off", // ts(2539)
        "no-import-assign": "off", // ts(2539) & ts(2540)
        "no-new-symbol": "off", // ts(2588)
        "no-obj-calls": "off", // ts(2349)
        "no-redeclare": "off", // ts(2451)
        "no-setter-return": "off", // ts(2408)
        "no-this-before-super": "off", // ts(2376)
        "no-undef": "off", // ts(2304)
        "no-unreachable": "off", // ts(7027)
        "no-unsafe-negation": "off", // ts(2365) & ts(2360) & ts(2358)
        "no-var": "error", // ts transpiles let/const to var, so no need for vars any more
        "prefer-const": "error", // ts provides better types with const
        "prefer-rest-params": "error", // ts provides better types with rest args over arguments
        "prefer-spread": "error", // ts transpiles spread to apply, so no need for manual apply
        "valid-typeof": "off", // ts(2367)
      },
    },
  ],
};
