<template>
<div>
  <div class="form-group">
    <label class="control-label">Exercise:
      <button type="button" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-trash" /> Remove</button>
    </label>
      <select :value="entry.exercise.name" @change="updateExercise(entry, $event.target.value)" class="form-control">
        <option v-for="exercise in exercises">{{exercise.name}}</option>
    </select>
  </div>

  <div v-for="(set, index) in entry.sets" class="well">
    <button type="button" data-dismiss="alert" @click.prevent="removeSet({entry, index})" class="close"><span>&times;</span></button>
    <SetForm :set="set" />
  </div>

  <div class="form-group">
    <button type="button" @click.prevent="addSet(entry)" class="center-block btn btn-secondary">Add Set</button>
  </div>

</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import SetForm from './SetForm.vue'
export default {
  components: { SetForm },
  props: ['entry'],
  computed: mapState({
    exercises: state => state.exercises.exercises
  }),
  methods: {
    ...mapMutations({
      addSet: 'ADD_SET_TO_ENTRY',
      removeSet: 'REMOVE_SET_FROM_ENTRY'
    }),
    updateExercise: function (entry, value) {
      this.$store.commit('CHANGE_EXERCISE', {
        entry,
        exercise: this.exercises.find(obj => obj.name === value)})
    }
  }
}
</script>
