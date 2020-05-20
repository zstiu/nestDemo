module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
    // 'google'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
