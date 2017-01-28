<template>
    <form>
      <div class="form-group">
        <label for="date_proposed" class="control-label">Date Proposed:</label>
        <input class="form-control" id="date_proposed" v-model="date_proposed" type="date">
      </div>
      <div class="form-group">
        <label for="workout_comment" class="control-label">Workout Comments:</label>
        <textarea class="form-control" id="workout_comment" v-model="comment" type="text"></textarea>
      </div>

      <entryForm :entry="entry" :addSet="addSet" :removeSet="removeSet" v-for="(entry, index) in entries"></entryForm>

      <div class="form-group">
          <div class="btn-group" role="group">
            <button type="button" @click.prevent="addEntry" class="btn btn-secondary">Add Exercise</button>
            <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">Submit</button>
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
  data: function () {
    return {
      date_proposed: null,
      comment: '',
      entries: [{
        exercise: {name: ''},
        sets: [
          {weight: 0, reps: 0, comment: '', bodyweight: false}
        ]
      }]
    }
  },
  methods: {
    addSet: function (entry) {
      entry.sets.push(
        {weight: 0, reps: 0, comment: '', bodyweight: false}
      )
    },
    removeSet: function (entry, setIndex) {
      entry.sets.splice(setIndex, 1)
    },
    addEntry: function () {
      this.entries.push({
        exercise: {name: ''},
        sets: [
          {weight: 0, reps: 0, comment: '', bodyweight: false}
        ]
      })
    },
    onSubmit: function () {
      // TODO Validation.
      let {date_proposed, comment, entries} = this
      let workout = {date_proposed, comment, entries}
      let that = this
      this.$store.dispatch('ADD_WORKOUT', workout)
        .then(function (response) {
          that.$emit('success')
        }).catch(function (error) {
          console.log(error)
          that.$emit('failure')
        })
    }
  }
}
</script>
