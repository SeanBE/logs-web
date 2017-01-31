<template>
<div>
  <div class="form-group">
    <label class="control-label">Exercise:</label>
      <select :value="entry.exercise.name" @change="updateExercise(entry, $event.target.value)" class="form-control">
        <option v-for="exercise in exercises">{{exercise.name}}</option>
    </select>
  </div>

  <div v-for="(set, index) in entry.sets" class="well">
    <button type="button" data-dismiss="alert" @click.prevent="removeSet({entry, index})" class="close"><span>&times;</span></button>
    <SetForm :set="set" :updateSet="updateSet" />
  </div>

  <div class="form-group">
    <button type="button" @click.prevent="addSet(entry)" class="btn btn-secondary">Add Set</button>
  </div>
</div>
</template>

<script>
import SetForm from './SetForm.vue'
export default {
  components: { SetForm },
  props: ['entry', 'exercises', 'addSet', 'updateExercise', 'updateSet', 'removeSet']
}
</script>
