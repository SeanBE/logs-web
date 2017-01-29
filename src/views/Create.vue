<template>
<div class="row">
  <div class="col-md-12">
    <WorkoutForm :workout="workout" :onSubmit="onSubmit" :exercises="exercises"></WorkoutForm>
  </div>
</div>
</template>

<script>
import {
  mapMutations,
  mapGetters
} from 'vuex'

import WorkoutForm from '../components/WorkoutForm.vue'

export default {
  components: {
    WorkoutForm
  },
  data: function () {
    return {
      workout: {
        date_proposed: null,
        comment: '',
        entries: [{
          exercise: {name: ''},
          sets: [
            {weight: 0, reps: 0, comment: '', bodyweight: false}
          ]
        }]
      }
    }
  },
  computed: {
    ...mapGetters(['exercises'])
  },
  methods: {
    ...mapMutations({
      setSuccessMessage: 'SET_SUCCESS_MESSAGE',
      setErrorMessage: 'SET_ERROR_MESSAGE'
    }),
    onSubmit: function () {
      // TODO Validation.
      let {date_proposed, comment, entries} = this
      let workout = {date_proposed, comment, entries}

      this.$store.dispatch('ADD_WORKOUT', workout)
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
