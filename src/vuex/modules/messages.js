import * as types from '../types'

const state = {
  successMessage: '',
  errorMessage: ''
}

const mutations = {
  [types.SET_SUCCESS_MESSAGE] (state, message) {
    state.successMessage = message
    state.errorMessage = ''
  },
  [types.SET_ERROR_MESSAGE] (state, message) {
    state.successMessage = ''
    state.errorMessage = message
  },
  [types.CLEAR_MESSAGES] (state) {
    state.errorMessage = ''
    state.successMessage = ''
  }
}

export default {
  state,
  mutations
}
