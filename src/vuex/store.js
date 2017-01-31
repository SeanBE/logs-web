import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import workouts from './modules/workouts'
import messages from './modules/messages'
import exercises from './modules/exercises'

import {subscribe} from './plugins'
import createLogger from 'vuex/dist/logger.js'

Vue.use(Vuex)
Vue.config.debug = true
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    workouts,
    messages,
    exercises
  },
  strict: debug,
  plugins: debug ? [createLogger(), subscribe] : [subscribe]
})
