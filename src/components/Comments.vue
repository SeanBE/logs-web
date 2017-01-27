<template>
<div>
  <h4>Comments</h4>
  <ul class="list-group">
    <li v-if="comment" class="list-group-item"> Workout - {{comment}} </li>
    <li v-for="entry in filteredComments" class="list-group-item">{{entry.name}} - Set #{{entry.index}} : {{entry.comment}}</li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['entries', 'comment'],
  computed: {
    filteredComments: function () {
      return this.entries.map(function (entry) {
        return entry.sets
          .filter(set => set.comment)
          .map((x, index) => Object.assign({}, x, {name: entry.exercise.name, index: entry.sets.indexOf(x) + 1}))
      }).reduce((a, b) => a.concat(b))
    }
  }
}
</script>
