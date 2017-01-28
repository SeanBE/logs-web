<template>
<div>
  <div class="row">
    <div class="col-md-12">

      <div v-if="success" class="alert alert-success alert-dismissible" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Success!</strong> Workout saved
      </div>

      <div v-if="error" class="alert alert-danger alert-dismissible" role="alert">
        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Error!</strong> Something went wrong. Try again!
      </div>

      <WorkoutForm @success="setSuccess" @failure="setFailure"></WorkoutForm>
      </div>
  </div>
</div>
</template>


<script>
import WorkoutForm from '../components/WorkoutForm.vue'

export default {
  data: function () {
    return {
      success: false,
      error: false
    }
  },
  methods: {
    setSuccess: function () {
      // TODO     - CLIENT: Redirect to workouts once successs
      this.success = true
    },
    setFailure: function () {
      this.error = true
    }
  },
  components: {
    WorkoutForm
  }
}
</script>
