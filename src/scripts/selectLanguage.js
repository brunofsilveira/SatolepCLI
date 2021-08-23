import { prompt } from '../commands/inquirer.js'
import { getLanguage, languageKeys } from '../lang/index.js'

const language = getLanguage()

export default async function selectLanguage() {
  const answers = await prompt({
    type: 'list',
    name: 'language',
    message: language.whatLanguageDoYouWantThisCLIToUse,
    choices: languageKeys,
  })

  return getLanguage(answers.language)
}
