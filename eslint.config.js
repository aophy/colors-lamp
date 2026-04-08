module.exports = [
  {
    ignores: ["public/js/md5.js"]
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        localStorage: "readonly"
      }
    },
    rules: {}
  }
];