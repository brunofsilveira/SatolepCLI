export function getInstallDevDependenciesCommand(
  packageManager = 'npm',
) {
  if (packageManager === 'yarn') {
    return 'yarn add -D'
  }

  return 'npm i --save-dev'
}
