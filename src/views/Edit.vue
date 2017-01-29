<template>
  <div>
    <!-- TODO use components!!-->
    <!-- TODO redirect if successful. otherwise show error message like login -->
  <div class="row">
    <div class="col-md-12">
      <h1>Edit Workout
        <button type="button" @click.prevent="updateWorkout" class="btn btn-primary">Update</button>
        <button type="button" disabled class="btn">Add Exercise</button>
        <!-- @click.prevent="addExercise({workout:workout, exercise:exercise})"  -->
      </h1>
      <form>
        <div class="form-group">
          <label for="date_proposed" class="control-label">Date Proposed:</label>
          <input class="form-control" id="date_proposed" :value="workout.date_proposed" @input="updateDetails" name="date_proposed" type="date">
        </div>
        <div class="form-group">
          <label for="date_completed" class="control-label">Date Completed:</label>
          <input class="form-control" id="date_completed" :value="workout.date_completed" @input="updateDetails" name="date_completed" type="date">
        </div>
        <div class="form-group">
          <label for="workout_comment" class="control-label">Workout Comments:</label>
          <textarea class="form-control" id="workout_comment" :value="workout.comment" @input="updateDetails" name="comment" type="text"></textarea>
        </div>
      </div>
</div>
<div v-for="(entry,exIndex) in workout.entries" class="row">
  <div class="col-md-12">
    <div class="form-group">
      <label class="control-label">Exercise:</label>

      <select :value="entry.exercise.name" @change="updateExercise(exIndex, $event.target.value)" class="form-control">
          <option v-for="exercise in exercises">{{exercise.name}}</option>
      </select>
    </div>
    <div class="form-group">
      <!-- @click.prevent="addSet({workout:workout, exercise:exercise})"  -->
      <button type="button" disabled class="btn">Add Set</button>
    </div>
    <div v-for="(set,sIndex) in entry.sets" class="well form-group">

      <div class="form-group">
      <label class="control-label">Reps:</label>
      <input type="number" :value="set.reps"
          @input="updateSets(exIndex, sIndex, 'reps', $event)" class="form-control" />
      </div>

      <label class="control-label">Weight:</label>
      <input :disabled="set.bodyweight" type="number" :value.number="set.weight"
          @input="updateSets(exIndex, sIndex, 'weight', $event)" class="form-control" />

      <div class="checkbox">
        <label>
          <input type="checkbox" @change="updateCheck(exIndex, sIndex, 'bodyweight', $event)" :checked="set.bodyweight">
          Bodyweight
        </label>
      </div>

      <label class="control-label">Comment:</label>
      <textarea class="form-control" :value="set.comment"
          @input="updateSets(exIndex, sIndex, 'comment', $event)" type="text">

    </div>
</div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['workout', 'exercises'])
  },
  methods: {
    updateDetails: function (e) {
      this.$store.dispatch('CHANGE_WORKOUT_DETAILS', {attr: e.target.name, value: e.target.value})
    },
    updateExercise: function (exIndex, value) {
      this.$store.dispatch('CHANGE_EXERCISE', {
        index: exIndex,
        exercise: this.exercises.find(obj => obj.name === value)})
    },
    updateSets: function (exIndex, setIndex, attribute, e) {
      this.$store.dispatch('CHANGE_SET_DETAILS', {
        exercise: exIndex,
        set: setIndex,
        attr: attribute,
        value: e.target.value})
    },
    updateCheck: function (exIndex, setIndex, attribute, e) {
      this.$store.dispatch('CHANGE_SET_DETAILS', {
        exercise: exIndex,
        set: setIndex,
        attr: attribute,
        value: e.target.checked})
    },
    updateWorkout () {
      // TODO Validation.
      this.$store.dispatch('UPDATE_WORKOUT')
    }
  }
}

</script>
