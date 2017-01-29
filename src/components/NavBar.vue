<template>
<nav class="navbar navbar-default">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link :to="{ name: 'dashboard' }">
        <a class="navbar-brand">Tracker</a>
      </router-link>
    </div>

    <div class="navbar-collapse collapse" id="navbar">
      <ul v-show="isLogged" class="nav navbar-nav navbar-right">
        <li>
          <router-link :to="{ name: 'workouts' }"><a class="navbar-link">Workouts</a></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'exercise.list' }"><a class="navbar-link">Exercises</a></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'workout.new' }"><a class="navbar-link"><span class="glyphicon glyphicon-plus"></span> Create Workout</a></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'auth.logout' }"><a @click.prevent="logout" class="navbar-link"><span class="glyphicon glyphicon-log-out"></span> Sign Out</a></router-link>
        </li>
      </ul>
    </div>
</nav>
</template>

<script>
import {
  mapGetters, mapActions
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLogged'])
  },
  methods: {
    ...mapActions({'logout': 'REMOVE_TOKEN'})
  },
  watch: {
    isLogged (value) {
      if (value === false) {
        this.$router.push({
          name: 'auth.login'
        })
      }
    }
  }
}
</script>
