export const state = () => ({
  locales: ['pl', 'de'],
  locale: 'pl',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
