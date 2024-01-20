module.exports = {
  env: {
    browser: true, // browser global variables
  },
  plugins: ["react", "react-hooks"],
  extends: ["unobtrusive/react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Issue errors if the "rules of hooks" are not met: https://reactjs.org/docs/hooks-rules.html
    "react-hooks/rules-of-hooks": "error",
    // Issue errors if hooks dependencies are not exhaustive
    "react-hooks/exhaustive-deps": "error",
  },
};
