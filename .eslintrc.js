module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/jsx-indent': [1, 4],
        'react/jsx-indent-props': [1, 4],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'arrow-body-style': 'off',
        'react/destructuring-assignment': 'off',
        'react/prop-types': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'no-unused-vars': 'warn',
        'jsx-a11y/no-static-element-interactions': [
            'off',
            {
                handlers: [
                    'onClick',
                    'onMouseDown',
                    'onMouseUp',
                    'onKeyPress',
                    'onKeyDown',
                    'onKeyUp',
                ],
                allowExpressionValues: true,
            },
        ],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        semi: 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-tag-spacing': 'off',
        quotes: 'off',
    },
}
