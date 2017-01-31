<template>
<div class="panel panel-default">
  <div class="panel-heading clearfix" role="tab" v-bind:id="'header'+this.workout.id">

    <div class="panel-title pull-left">
     <a role="button" data-toggle="collapse" data-parent="#accordion" v-bind:href="'#collapse'+this.workout.id">
       <h4 v-if="workout.date_completed">
         Completed on {{workout.date_completed}}
       </h4>
       <h4 v-else>
         Proposed on {{workout.date_proposed}}
       </h4>
      </a>
    </div>

    <div class="btn-group pull-right">
      <button type="button" @click.prevent="deleteExercise(workout)" class="btn btn-danger btn-sm">
        <span class="glyphicon glyphicon-trash"></span>
      </button>

      <button @click="goToEdit(workout)" type="button" class="btn btn-info btn-sm">
        <span class="glyphicon glyphicon-pencil"></span>
      </button>
    </div>

  </div>
  <div v-bind:id="'collapse'+ this.workout.id" class="panel-collapse collapse in" role="tabpanel">
    <div class="panel-body">
      <Sets :comment="workout.comment" :entries="workout.entries" />
    </div>
</div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import Sets from './Sets.vue'

export default {
  // TODO move logic to view component.
  components: {
    Sets
  },
  methods: {
    ...mapMutations({ setActiveWorkout: 'SET_ACTIVE_WORKOUT' }),
    ...mapActions({deleteExercise: 'DELETE_WORKOUT'}),
    goToEdit (workout) {
      this.setActiveWorkout(workout)
      this.$router.push({name: 'workout.edit', params: { id: workout.id }})
    }
  },
  props: ['workout']
}
</script>
