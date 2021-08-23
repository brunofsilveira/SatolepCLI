export const nextjsEslintrc = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next',
    'next/core-web-vitals',
  ],
  ignorePatterns: [
    'build',
    'coverage',
    '.next',
    '.storybook',
    'next.config.js',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  root: true,
  rules: {
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 0,
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-fragments': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': ['off'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react$']],
      },
    ],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}

export const nextjsPrettierEslintrc = {
  rules: {
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: true,
        jsxBracketSameLine: false,
      },
    ],
  },
}