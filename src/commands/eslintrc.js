import { getInstallDevDependenciesCommand } from './utils'

export function installDependecies({
  packageManager = 'npm',
  dependencies,
}) {
  command = getInstallDevDependenciesCommand(packageManager)
  return `${command} ${dependencies}`
}

export const installEslintDependecies = (packageManager = 'npm') => {
  return installDependecies({
    packageManager,
    dependencies:
      'eslint eslint-plugin-simple-import-sort eslint-plugin-unused-imports eslint-plugin-import',
  })
}

export const installNextjsEslintDependecies = (
  packageManager = 'npm',
) => {
  return installDependecies({
    packageManager,
    dependencies: 'eslint-plugin-react',
  })
}

export const installPrettierEslintDependecies = (
  packageManager = 'npm',
) => {
  return installDependecies({
    packageManager,
    dependencies:
      'prettier eslint-config-prettier eslint-plugin-prettier prettier-eslint',
  })
}

export const installTypeScriptEslintDependecies = (
  packageManager = 'npm',
) => {
  return installDependecies({
    packageManager,
    dependencies:
      '@typescript-eslint/eslint-plugin @typescript-eslint/parser',
  })
}
