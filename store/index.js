import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      readingLevel: 'young'
    },
    mutations: {
      setReadingLevel (state, newReadingLevel) {
        state.readingLevel = newReadingLevel
      }
    }
  })
}

export default createStore
