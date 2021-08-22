import inquirer from 'inquirer'

import { getLanguage, languageKeys } from './lang/index.js'

const prompt = inquirer.createPromptModule()
let language = getLanguage()

async function run() {
  await prompt({
    type: 'list',
    name: 'language',
    message: language.whatLanguageDoYouWantThisCLIToUse,
    choices: languageKeys,
  }).then(answers => (language = getLanguage(answers.language)))

  await prompt({
    type: 'list',
    name: 'projectType',
    message: language.whatTypeOfProjectYouWantToSetUp,
    choices: [
      {
        name: 'NextJS // Front-end Web',
        value: 'nextjs',
      },
      {
        name: 'NestJS // Back-end',
        value: 'nestjs',
      },
      {
        name: 'React Native // Front-end App',
        value: 'reactNative',
      },
    ],
  }).then(answers => console.log(answers))
}

run()
