import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      datAge: 'young'
    },
    mutations: {
      setDatAge (state, datAge) {
        state.datAge = datAge
      }
    }
  })
}

export default createStore
