import lodash from 'lodash'

import { concatArrays } from './utils.js'
import { exec } from '../commands/shell.js'
import { prompt } from '../commands/inquirer.js'

import { eslintrc } from '../templates/eslintrc/eslintrc.js'
import { jsEslintrc } from '../templates/eslintrc/js-eslintrc.js'
import {
  nextjsEslintrc,
  nextjsPrettierEslintrc,
} from '../templates/eslintrc/nextjs-eslintrc.js'
import { prettierEslintrc as prettierEslintrcObject } from '../templates/eslintrc/prettier-eslintrc.js'
import { tsEslintrc } from '../templates/eslintrc/ts-eslintrc.js'

const projectTypeEslintrcObject = { nextjsEslintrc }
const programmingLanguageEslintrcObject = {
  jsEslintrc,
  tsEslintrc,
}

const projectTypePrettierEslintrcObject = {
  nextjsPrettierEslintrc,
}

export default async function generateEslint({
  language,
  packageManager,
}) {
  const answers = await getAnswers({
    language,
    packageManager,
  })

  const projectTypeEslintrc =
    projectTypeEslintrcObject[`${answers.projectType}Eslintrc`]

  const programmingLanguageEslintrc =
    programmingLanguageEslintrcObject[
      `${answers.programmingLanguage}Eslintrc`
    ]

  const prettierEslintrc = answers.prettier
    ? prettierEslintrcObject
    : {}

  const projectTypePrettierEslintrc = answers.prettier
    ? projectTypePrettierEslintrcObject[
        `${answers.projectType}PrettierEslintrc`
      ]
    : {}

  const fullEslintrc = lodash.mergeWith(
    eslintrc,
    prettierEslintrc,
    programmingLanguageEslintrc,
    projectTypeEslintrc,
    projectTypePrettierEslintrc,
    concatArrays,
  )

  exec(`echo '${JSON.stringify(fullEslintrc)}' > .eslintrc`)
}

async function getAnswers({ language, packageManager }) {
  return await prompt([
    {
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
    },
    {
      type: 'list',
      name: 'programmingLanguage',
      message: 'Utilizar?? JavaScript ou TypeScript?',
      choices: [
        {
          name: 'JavaScript',
          value: 'js',
        },
        {
          name: 'TypeScript',
          value: 'ts',
        },
      ],
    },
    {
      type: 'confirm',
      name: 'prettier',
      message: 'Utilizar Prettier?',
    },
  ]).then(answers => answers)
}
