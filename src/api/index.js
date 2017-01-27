import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT

// WORKOUT
export const getWorkouts = () => {
  return axios.get('workouts/')
}

export const addWorkout = (data) => {
  return axios.post('workouts/', data)
}

export const deleteWorkout = (id) => {
  return axios.delete('workouts/' + id)
}

export const updateWorkout = (id, data) => {
  return axios.patch('workouts/' + id, data)
}

// AUTH
export const newToken = ({ username, password }) => {
  return axios.post('tokens/', {}, {
    auth: {
      username: username,
      password: password
    }
  })
}

export const removeToken = () => {
  return axios.delete('tokens/')
}

// EXERCISE
export const addExercise = (data) => {
  return axios.post('exercises/', data)
}

export const getExercises = () => {
  return axios.get('exercises/')
}
