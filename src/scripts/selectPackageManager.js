import { prompt } from '../commands/inquirer.js'

export default async function selectLanguage() {
  const { packageManager } = await prompt({
    type: 'list',
    name: 'packageManager',
    message: 'Utilizar Yarn ou NPM?',
    choices: [
      {
        name: 'NPM',
        value: 'npm',
      },
      {
        name: 'Yarn',
        value: 'yarn',
      },
    ],
  })

  return packageManager
}
