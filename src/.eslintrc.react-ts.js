module.exports = {
  env: {
    browser: true, // browser global variables
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  extends: ["unobtrusive/react"],
  "settings": {
    "react": {
      "version": "detect",
    }
  },
  rules: {
    // Issue errors if the "rules of hooks" are not met: https://reactjs.org/docs/hooks-rules.html
    "react-hooks/rules-of-hooks": "error",
    // Issue errors if hooks dependencies are not exhaustive
    "react-hooks/exhaustive-deps": "error",

    "@typescript-eslint/naming-convention": [
      "warn",
      // variable and property naming convention are not enforced for React projects
      {
        "selector": "memberLike",
        "modifiers": ["private"],
        "format": ["camelCase"],
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid"
      },
      {
        "selector": ["enumMember"],
        "format": ["UPPER_CASE"]
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      },
      {
        "selector": "function",
        "format": [ 
          "PascalCase", // especial case for react functional components
          "camelCase"
        ]
      }
    ],
  },
};
