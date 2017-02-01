<template>
  <form @submit.prevent="onSubmit">

    <div class="form-group">
      <label class="control-label">Date Proposed:</label>
      <input type="date" name="date_proposed" class="form-control" :value="workout.date_proposed" @input="updateDetails">
    </div>

    <div v-if="isEditing" class="form-group">
      <label class="control-label">Date Completed:</label>
      <input type="date" name="date_completed" class="form-control" :value="workout.date_completed" @input="updateDetails">
    </div>

    <div class="form-group">
      <label class="control-label">Workout Comments:</label>
      <textarea type="text" name="comment" class="form-control" :value="workout.comment" @input="updateDetails" />
    </div>

    <entryForm v-for="entry in workout.entries" :entry="entry" />

    <div class="form-group">
        <div class="btn-group" role="group">
          <button type="button" @click.prevent="addEntry(workout)" class="btn btn-secondary">Add Exercise</button>
          <button type="submit" class="btn btn-primary">Save Workout</button>
        </div>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
import EntryForm from './EntryForm.vue'

export default {
  components: { EntryForm },
  props: ['workout', 'onSubmit', 'isEditing'],
  methods: {
    ...mapMutations({
      addEntry: 'ADD_ENTRY_TO_WORKOUT',
      updateDetails: 'CHANGE_WORKOUT_DETAILS'
    })
  }
}
</script>
