<template>
<div class="row">
  <div class="col-md-12">
    <form class="well" @submit.prevent="validateBeforeSubmit">
      <div :class="{'form-group': true, 'has-error': errors.has('username') }">
        <label for="username" class="control-label">Username</label>
        <input v-validate="'required'" type="text" class="form-control" name="username" placeholder="Username" v-model="username">
        <span v-show="errors.has('username')" class="help-block">{{ errors.first('username') }}</span>
      </div>

      <div :class="{'form-group': true, 'has-error': errors.has('password') }">
        <label for="password" class="control-label">Password</label>
        <input v-validate="'required'" type="password" class="form-control" name="password" placeholder="Password" v-model="password">
        <span v-show="errors.has('password')" class="help-block">{{ errors.first('password') }}</span>
      </div>

      <button class="btn btn-primary btn-block" type="submit">Sign In</button>
    </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({ signIn: 'NEW_TOKEN' }),
    ...mapMutations({ setErrorMessage: 'SET_ERROR_MESSAGE' }),
    validateBeforeSubmit () {
      const {username, password} = this

      this.$validator.validateAll()
        .then(success => {
          if (!success) { return }
        })
        .then(() => this.signIn({ username, password }))
        .then(() => this.$router.push({ name: 'dashboard' }))
        .catch((error) => {
          let errorMessage = null
          if (error.response) {
            errorMessage = 'Yo Bro! You\'re password is wrong. Fix it!'
          } else {
            errorMessage = 'Validation failed. Please try again!'
          }
          this.setErrorMessage(errorMessage)
        })
    }
  }
}
</script>
