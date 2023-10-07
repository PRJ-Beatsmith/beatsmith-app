module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true, es6: true, jest: true },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs", "public"],
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    requireConfigFile: false,
  },
  useFormatter: "table",
  plugins: ["react", "prettier", "import", "react-hooks"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx"] }],
    "no-unused-vars": "warn",
    "no-undef": "off",
    "no-console": "off",
    "react/jsx-no-target-blank": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
