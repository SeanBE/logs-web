<template>
<div>
    <div class="form-group">
      <label class="control-label">Reps:</label>
      <input type="number" name="reps" :value="set.reps"
        @input="updateSet({set, target: $event.target})" class="form-control" />
    </div>

    <div class="form-group">
      <label class="control-label">Weight:</label>
      <input :disabled="set.bodyweight" type="number" name="weight" :value.number="set.weight"
        @input="updateSet({set, target: $event.target})" class="form-control" />

      <div class="checkbox">
        <label>
          <input type="checkbox" :checked="set.bodyweight"
          @change="updateSet({set, target: {name: 'bodyweight', value: $event.target.checked}})" >
          Bodyweight
        </label>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label">Comment:</label>
      <textarea name="comment" :value="set.comment" type="text"
          @input="updateSet({set, target: $event.target})" class="form-control">
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['set'],
  methods: {
    ...mapMutations({
      updateSet: 'CHANGE_SET_DETAILS'
    })
  }
}
</script>
