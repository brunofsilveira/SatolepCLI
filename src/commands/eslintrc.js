import { getInstallDevDependenciesCommand } from './utils'

function installEslintDependecies({
  packageManager = 'npm',
  dependencies,
}) {
  command = getInstallDevDependenciesCommand(packageManager)
  return `${command} ${dependencies}`
}

export const installEslintDependecies = (packageManager = 'npm') => {
  return installEslintDependecies({
    packageManager,
    dependencies:
      'eslint eslint-plugin-simple-import-sort eslint-plugin-unused-imports eslint-plugin-import',
  })
}

export const installNextjsEslintDependecies = (
  packageManager = 'npm',
) => {
  return installEslintDependecies({
    packageManager,
    dependencies: 'eslint-plugin-react',
  })
}

export const installPrettierEslintDependecies = (
  packageManager = 'npm',
) => {
  return installEslintDependecies({
    packageManager,
    dependencies:
      'prettier eslint-config-prettier eslint-plugin-prettier prettier-eslint',
  })
}

export const installTypeScriptEslintDependecies = (
  packageManager = 'npm',
) => {
  return installEslintDependecies({
    packageManager,
    dependencies:
      '@typescript-eslint/eslint-plugin @typescript-eslint/parser',
  })
}
