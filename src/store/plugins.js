import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
  store.subscribe((mutation, { theme }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
  })
}

export default [localStoragePlugin]