<template>
<div>
  <div v-if="comment" class="row">
    <div class="col-xs-offset-1 col-xs-10">
      <p class="lead well">
        {{comment}}
      </p>
    </div>
  </div>
  <div v-for="entry in entries" class="row">
    <div class="col-xs-12">
      <h4>{{entry.exercise.name}}</h4>
      <table v-for="(set,index) in entry.sets" class="table table-condensed">
        <tbody>
          <tr>
            <td>Set #{{index}}</td>
            <td>{{set.reps}} Reps</td>
            <td v-if="set.bodyweight">Bodyweight</td>
            <td v-else>{{set.weight}} kg</td>
          </tr>
        </tbody>
        <caption v-if="set.comment">{{set.comment}}</caption>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['comment', 'entries']
}
</script>
