export const eslintrc = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'unused-imports', 'import'],
  root: true,
  rules: {
    'max-len': 'off',
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react$'],
          ['^\\u0000'],
          ['^@?\\w'],
          ['^app(/.*|$)'],
          ['^\\.'],
        ],
      },
    ],
    'import/newline-after-import': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'sort-imports': 'off',
    'import/order': 'off',
  },
}
