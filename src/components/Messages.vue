<template>
<div class="row">
  <div class="col-md-12">

    <div v-show="this.successMessage" class="alert alert-success alert-dismissible" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign"></span>
      <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
        <strong>Success!</strong> {{this.successMessage}}
    </div>

    <div v-show="this.errorMessage" class="alert alert-danger alert-dismissible" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign"></span>
      <button type="button" class="close" data-dismiss="alert" ><span>&times;</span></button>
        <strong>Error!</strong> {{this.errorMessage}}
    </div>

  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: mapState({
    successMessage: state => state.messages.successMessage,
    errorMessage: state => state.messages.errorMessage
  })
}
</script>
