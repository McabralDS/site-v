module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier',
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
