<template>
<div class="row">
  <div class="col-md-12">
    <LoginForm :username="username" :password="password" :onSubmit="onSubmit" />
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import LoginForm from '../components/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({ signIn: 'NEW_TOKEN' }),
    ...mapMutations({ setErrorMessage: 'SET_ERROR_MESSAGE' }),
    onSubmit () {
      const {username, password} = this
      this.signIn({ username, password })
        .then(() => this.$router.push({ name: 'dashboard' }))
        .catch(() => this.setErrorMessage('Yo Bro! You\'re password is wrong. Fix it!'))
    }
  }
}
</script>
