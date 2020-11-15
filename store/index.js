import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    state: {
      locales: ['pl', 'de'],
      locale: 'pl',
    },
    mutations: {
      SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      },
    },
  })
