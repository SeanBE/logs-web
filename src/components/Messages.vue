<template>
<div class="row">
  <div class="col-md-12">

    <div v-if="this.successMessage" class="alert alert-success alert-dismissible" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign"></span>
      <button type="button" @click.prevent="clearMessages" class="close" data-dismiss="alert"><span>&times;</span></button>
        <strong>Success!</strong> {{this.successMessage}}
    </div>

    <div v-if="this.errorMessage" class="alert alert-danger alert-dismissible" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign"></span>
      <button type="button" @click.prevent="clearMessages" class="close" data-dismiss="alert" ><span>&times;</span></button>
        <strong>Error!</strong> {{this.errorMessage}}
    </div>

  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({ clearMessages: 'CLEAR_MESSAGES' })
  },
  computed: mapState({
    successMessage: state => state.messages.successMessage,
    errorMessage: state => state.messages.errorMessage
  })
}
</script>
