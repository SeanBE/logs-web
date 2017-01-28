<template>
<div class="panel panel-default">
  <div class="panel-heading" role="tab" v-bind:id="'header'+this.workout.id">
      <h4 class="panel-title">

      <a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="'#collapse'+this.workout.id">
        Workout {{workout.date_proposed}}
      </a>

      <div class="pull-right">
      <button type="button" @click.prevent="deleteExercise(workout)" class="btn btn-danger btn-xs">
        <span class="glyphicon glyphicon-trash"></span>
      </button>
      <button @click="goToEdit(workout)" type="button" class="btn btn-info btn-xs">
        <span class="glyphicon glyphicon-pencil"></span>
      </button>
      </div>
      
    </h4>
  </div>
  <div v-bind:id="'collapse'+ this.workout.id" class="panel-collapse collapse in" role="tabpanel">
    <div class="panel-body">
      <Sets :comment="workout.comment" :entries="workout.entries" />
    </div>
</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Sets from './Sets.vue'

export default {
  components: {
    Sets
  },
  methods: {
    ...mapActions({deleteExercise: 'DELETE_WORKOUT'}),
    goToEdit (workout) {
      this.$store.commit({type: 'SET_ACTIVE_WORKOUT', workout: workout})
      this.$router.push({name: 'workout.edit', params: { id: workout.id }})
    }
  },
  props: ['workout']
}
</script>
<style></style>
