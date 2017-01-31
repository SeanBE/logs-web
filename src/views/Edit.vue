<template>
  <div class="row">
    <div class="col-md-12">

      <WorkoutForm
        :editing="true"
        :workout="workout"
        :exercises="exercises"
        :updateDetails="updateDetails"
        :onSubmit="onSubmit"
        :addSet="addSet"
        :updateExercise="updateExercise"
        :updateSet="updateSet"
        :removeSet="removeSet"
        :addEntry="addEntry" />

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import WorkoutForm from '../components/WorkoutForm.vue'

export default {
  name: 'EditPage',
  components: { WorkoutForm },
  computed: mapState({
    exercises: state => state.exercises.exercises,
    workout: state => state.workouts.workout
  }),
  methods: {
    ...mapMutations({
      setSuccessMessage: 'SET_SUCCESS_MESSAGE',
      setErrorMessage: 'SET_ERROR_MESSAGE',
      updateDetails: 'CHANGE_WORKOUT_DETAILS',
      addEntry: 'ADD_ENTRY_TO_WORKOUT',
      addSet: 'ADD_SET_TO_ENTRY',
      updateSet: 'CHANGE_SET_DETAILS',
      removeSet: 'REMOVE_SET_FROM_ENTRY'
    }),
    updateExercise: function (entry, value) {
      this.$store.commit('CHANGE_EXERCISE', {
        entry,
        exercise: this.exercises.find(obj => obj.name === value)})
    },
    onSubmit: function () {
      this.$store.dispatch('UPDATE_WORKOUT')
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
