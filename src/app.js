import generateEslintrc from './scripts/generateEslintrc.js'
import selectLanguage from './scripts/selectLanguage.js'
import selectPackageManager from './scripts/selectPackageManager.js'

export default async function app() {
  const language = await selectLanguage()
  const packageManager = await selectPackageManager()

  await generateEslintrc({ language, packageManager })
}
