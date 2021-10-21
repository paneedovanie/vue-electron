const state = {
  model: true
}

const getters = {
  sidebar: state => state
}

const mutations = {
  SET: (state, payload) => {
    state = { ...state, ...payload }
    console.log(state)
  },
  SHOW: (state) => {
    state.model = true
  },
  HIDE: (state) => {
    state.model = false
  },
  TOGGLE: (state) => {
    state.model = !state.model
  }
}

const actions = {
  set: ({ commit }, payload) => {
    commit('SET', payload)
  },
  show: ({ commit }) => {
    commit('SHOW')
  },
  hide: ({ commit }) => {
    commit('HIDE')
  },
  toggle: ({ commit }) => {
    commit('TOGGLE')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}