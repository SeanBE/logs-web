import * as api from '../../api/'
import * as types from '../types'

const state = {
  exercises: []
}

const getters = {
  recentlyUsed: state => state.exercises
}

const actions = {
  FETCH_EXERCISES: ({ commit, state }) => {
    return api.getExercises()
      .then(({ data }) => commit(types.SET_EXERCISES, data))
  },
  ADD_EXERCISE: ({ commit }, data) => {
    return api.addExercise(data)
      .then(({data}) => commit(types.ADD_EXERCISE, data)
    )
  }
}

const mutations = {
  [types.ADD_EXERCISE] (state, exercise) {
    state.exercises.push(exercise)
  },
  [types.SET_EXERCISES] (state, exercises) {
    state.exercises = exercises
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
