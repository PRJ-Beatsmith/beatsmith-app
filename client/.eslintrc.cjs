module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true, es6: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "public"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "react", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "no-unused-vars": "warn",
    "no-undef": "off",
    "no-console": "off",
    "react/jsx-no-target-blank": "off",
  },
};
