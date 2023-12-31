/* eslint-disable no-useless-escape */
/* eslint-disable i18next/no-literal-string */
const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        '<tsconfigRootDir>/config/storybook/webpack.config.ts',
        'config/storybook/main.ts',
        'config/storybook/preview.ts'
      ],
      rules: {
        'i18next/no-literal-string': 'off'
        // означает что в i18 не было перевода в тестах
      },
      parserOptions: {
        sourceType: 'script',
        project: [
          path.resolve(__dirname, './tsconfig.json')
          // Это предполагает, что <tsconfigRootDir> является путем относительно текущего рабочего каталога. Если <tsconfigRootDir> является переменной окружения, также можно использовать ее значение вместо закодированного пути.
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json' // Добавлено сюда
  },
  plugins: [
    'react',
    'i18next'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    indent: ['error', 2],
    'no-tabs': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid']
      }
    ]
  },
  // параметр ignorePatterns
  ignorePatterns: ['build/**/*.js', 'jestEmptyComponent.tsx']
}
