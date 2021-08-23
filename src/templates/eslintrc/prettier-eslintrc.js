export const prettierEslintrc = {
  extends: ['plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        printWidth: 70,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
  },
}