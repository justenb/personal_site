export const STORAGE_KEY = 'justen-site'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {
  setThemeDark(state) {
    state.theme = "dark"
  },

  setThemeLight(state) {
    state.theme = "light"
  },
}