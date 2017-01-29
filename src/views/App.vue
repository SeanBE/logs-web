<template>
<div id="app" class="container-fluid">
  <navBar />
  <messages />
  <router-view />
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Messages from '../components/Messages.vue'

export default {
  components: {
    NavBar,
    Messages
  }
}
</script>
