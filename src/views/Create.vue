<template>
<div class="row">
  <div class="col-md-12">
    <WorkoutForm :workout="workout" :onSubmit="onSubmit" />
  </div>
</div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import WorkoutForm from '../components/WorkoutForm.vue'

export default {
  name: 'CreatePage',
  components: { WorkoutForm },
  created () {
    this.setNewWorkout()
  },
  computed: mapState({
    workout: state => state.workouts.workout
  }),
  methods: {
    ...mapActions({
      saveWorkout: 'ADD_WORKOUT'
    }),
    ...mapMutations({
      setNewWorkout: 'SET_NEW_WORKOUT',
      setSuccessMessage: 'SET_SUCCESS_MESSAGE',
      setErrorMessage: 'SET_ERROR_MESSAGE'
    }),
    onSubmit () {
      this.saveWorkout()
        .then(response => {
          this.setSuccessMessage('Workout successfully saved.')
          this.$router.push({ name: 'workouts' })
        }).catch(error => {
          this.setErrorMessage(error)
        })
    }
  }
}
</script>
