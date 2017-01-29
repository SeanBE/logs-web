<template>
<form class="well" @submit.prevent="onSubmit">
  <div class="form-group">
    <label for="username" class="control-label">Username</label>
    <input type="text" class="form-control" id="username" placeholder="Your username" v-model="username">
  </div>
  <div class="form-group">
    <label for="password" class="control-label">Password</label>
    <input type="password" class="form-control" id="password" v-model="password">
  </div>
  <button class="btn btn-primary btn-block" type="submit">Sign In</button>
</form>
</template>

<script>
export default {
  props: ['username', 'password', 'onSubmit']
}
</script>
