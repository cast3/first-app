module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-deprecated-slot-attribute': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        indent: ['error', 4],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        eqeqeq: 'off',
        'space-before-function-paren': [
            'error',
            {
                // "always", "never", or "ignore"
                anonymous: 'always', // anonymous is for anonymous function expressions (e.g. function () {}).
                named: 'ignore', // named is for named function expressions (e.g. function foo () {}).
                asyncArrow: 'always' // asyncArrow is for async arrow function expressions (e.g. async () => {}).
            }
        ]
    },

    plugins: ['vue']
}
