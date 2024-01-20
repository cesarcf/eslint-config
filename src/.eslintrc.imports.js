module.exports = {
  plugins: ["import"],

  rules: {
    "import/order": [
      "warn",
      {
        groups: [["builtin"], ["external"], ["internal"], ["parent", "sibling"], ["object"]],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
          {
            pattern: "react*",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "*.css",
            group: "object",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
          orderImportKind: "ignore",
        },
        pathGroupsExcludedImportTypes: [],
        distinctGroup: true,
        warnOnUnassignedImports: false,
      },
    ],
  },
};
