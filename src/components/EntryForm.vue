<template>
<div>
  <div class="form-group">
    <label class="control-label">Exercise:</label>

    <select v-model="entry.exercise.name" class="form-control">
        <option v-for="exercise in exercises" :value="exercise.name">{{exercise.name}}</option>
    </select>
  </div>
  <div v-for="(s, index) in entry.sets" class="well">
    <button type="button" data-dismiss="alert" @click.prevent="removeSet(entry, index)" class="close"><span>&times;</span></button>

    <div class="form-group">
      <label class="control-label">Reps:</label>
      <input type="number" v-model.number="s.reps" class="form-control" />
    </div>
    <div class="form-group">
      <label class="control-label">Weight:</label>
      <input :disabled="s.bodyweight" type="number" v-model.number="s.weight" class="form-control" />

    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="s.bodyweight">
        Bodyweight
      </label>
    </div>
    </div>
    <div class="form-group">
      <label class="control-label">Comment:</label>
      <textarea type="text" v-model="s.comment" class="form-control" />
    </div>
  </div>
  <div class="form-group">
    <button type="button" @click.prevent="addSet(entry)" class="btn btn-secondary">Add Set</button>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['entry', 'addSet', 'removeSet'],
  computed: {
    ...mapGetters(['exercises'])
  }
}
</script>
