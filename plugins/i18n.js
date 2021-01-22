import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// let language = null
// const languages = ['pl', 'en', 'de']

export default ({ app, store, route }) => {
  // if (process.browser) {
  //   if (!route.params.lang) {
  //     if (localStorage.getItem('preferLang') !== null) {
  //       console.log('set lang')
  //       language = JSON.parse(localStorage.getItem('preferLang'))
  //     } else {
  //       console.log('set browser lang')
  //       let lng = navigator.language
  //       lng = lng.trim().split(/-|_/)[0]
  //       if (languages.includes(lng)) {
  //         language = lng
  //         localStorage.setItem('preferLang', JSON.stringify(language))
  //       } else {
  //         language = 'en'
  //         localStorage.setItem('preferLang', JSON.stringify(language))
  //       }
  //     }
  //   }
  // }

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    // locale: language,
    fallbackLocale: 'pl',
    messages: {
      pl: require('~/locales/pl.json'),
      de: require('~/locales/de.json'),
      en: require('~/locales/en.json'),
    },
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
