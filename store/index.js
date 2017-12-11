import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      readingLevel: 'young',
      readingLevels: {
        young: 'Young Fruckles',
        old: 'Old Fruckles'
      }
    },
    mutations: {
      setReadingLevel (state, newReadingLevel) {
        state.readingLevel = newReadingLevel
      }
    }
  })
}

export default createStore
