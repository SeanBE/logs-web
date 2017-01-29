<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="date_proposed" class="control-label">Date Proposed:</label>
      <input class="form-control" id="date_proposed" v-model="workout.date_proposed" type="date">
    </div>

    <div class="form-group">
      <label for="workout_comment" class="control-label">Workout Comments:</label>
      <textarea class="form-control" id="workout_comment" v-model="workout.comment" type="text"></textarea>
    </div>

    <entryForm :entry="entry" :exercises="exercises" v-for="entry in workout.entries"></entryForm>

    <div class="form-group">
        <div class="btn-group" role="group">
          <button type="button" @click.prevent="addEntry" class="btn btn-secondary">Add Exercise</button>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
  </form>
</template>

<script>
import EntryForm from './EntryForm.vue'
export default {
  components: {
    EntryForm
  },
  props: ['onSubmit', 'workout', 'exercises'],
  methods: {
    addEntry: function () {
      this.workout.entries.push({
        exercise: {name: ''},
        sets: [ {weight: 0, reps: 0, comment: '', bodyweight: false} ]
      })
    }
  }
}
</script>
