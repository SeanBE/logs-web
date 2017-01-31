import { isEmpty } from 'lodash'
import * as api from '../../api/'
import * as types from '../types'

const state = {
  workouts: [],
  workout: { /* Workout currently editing.. */ }
}

const getters = {
  upcoming: state => {
    return state.workouts.filter(function (workout) {
      return isEmpty(workout.date_completed)
    })
  },
  completed: state => {
    return state.workouts.filter(function (workout) {
      return !isEmpty(workout.date_completed)
    })
  }
}

const actions = {
  FETCH_WORKOUTS: ({ commit, state }) => {
    api.getWorkouts()
    .then(({data}) => commit(types.SET_WORKOUTS, data))
  },
  DELETE_WORKOUT: ({ commit }, workout) => {
    api.deleteWorkout(workout.id)
    .then(() => commit(types.REMOVE_WORKOUT, workout))
  },
  ADD_WORKOUT: ({ commit }) => {
    return api.addWorkout(state.workout)
    .then(({data}) => commit(types.ADD_WORKOUT, data))
  },
  UPDATE_WORKOUT: ({ commit, state }) => {
    return api.updateWorkout(state.workout.id, state.workout)
  }
}

const mutations = {
  [types.SET_WORKOUTS] (state, workouts) {
    state.workouts = workouts
  },
  [types.ADD_WORKOUT] (state, workout) {
    state.workouts.push(workout)
  },
  [types.REMOVE_WORKOUT] (state, workout) {
    state.workouts.splice(state.workouts.indexOf(workout), 1)
  },
  [types.SET_ACTIVE_WORKOUT] (state, workout) {
    state.workout = workout
  },
  [types.SET_NEW_WORKOUT] (state) {
    state.workout = {
      date_proposed: null,
      comment: '',
      entries: [{
        exercise: { name: '' },
        sets: [
          { weight: 0, reps: 0, comment: '', bodyweight: false }
        ]
      }]
    }
  },
  [types.CHANGE_WORKOUT_DETAILS] (state, {target: {name: attr, value}}) {
    state.workout[attr] = value
  },
  [types.CHANGE_SET_DETAILS] (state, {set, target: {name: attr, value}}) {
    set[attr] = value
  },
  [types.CHANGE_EXERCISE] (state, {entry, exercise}) {
    entry.exercise = exercise
  },
  [types.ADD_ENTRY_TO_WORKOUT] (state, workout) {
    workout.entries.push({
      exercise: {name: ''},
      sets: [ {weight: 0, reps: 0, comment: '', bodyweight: false} ]
    })
  },
  [types.ADD_SET_TO_ENTRY] (state, entry) {
    entry.sets.push({weight: 0, reps: 0, comment: '', bodyweight: false})
  },
  [types.REMOVE_SET_FROM_ENTRY] (state, {entry, index}) {
    entry.sets.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
