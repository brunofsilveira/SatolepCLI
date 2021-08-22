const languages = {
  'pt-br': {
    whatLanguageDoYouWantThisCLIToUse:
      'Qual idioma desejas que este CLI utilize? / What language do you want this CLI to use?',
    whatTypeOfProjectYouWantToSetUp:
      'Qual tipo de projeto desejas configurar?',
  },
  'en-us': {
    whatLanguageDoYouWantThisCLIToUse:
      'Qual idioma desejas que este CLI utilize? / What language do you want this CLI to use?',
    whatTypeOfProjectYouWantToSetUp:
      'What type of project you want to set up?',
  },
}

function getLanguage(language = 'en-us') {
  return languages[language]
}

const languageKeys = () => {
  return Object.keys(languages)
}

export { getLanguage, languageKeys }
