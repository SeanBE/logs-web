<template>
  <div class="row">
    <div class="col-md-12">
      <WorkoutForm :editing="true" :workout="workout" :onSubmit="onSubmit" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import WorkoutForm from '../components/WorkoutForm.vue'

export default {
  name: 'EditPage',
  components: { WorkoutForm },
  computed: mapState({
    workout: state => state.workouts.workout
  }),
  methods: {
    ...mapActions({
      updateWorkout: 'UPDATE_WORKOUT'
    }),
    ...mapMutations({
      setSuccessMessage: 'SET_SUCCESS_MESSAGE',
      setErrorMessage: 'SET_ERROR_MESSAGE'
    }),
    onSubmit: function () {
      this.updateWorkout()
        .then(response => {
          this.setSuccessMessage('Workout successfully updated.')
          this.$router.push({ name: 'workouts' })
        }).catch(error => {
          this.setErrorMessage(error)
        })
    }
  }
}
</script>
