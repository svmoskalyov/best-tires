/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/prettier', // alias on '@vue/eslint-config-prettier/skip-formatting'
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-definition-name-casing': ['PascalCase' | 'kebab-case']
  }
}
