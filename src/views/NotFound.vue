<template>
<div class="well" style="text-align:center">
      <h2>Oops! 404 Not Found</h2>
      <div>
        <router-link :to="{ name: 'dashboard' }">
          <a class="btn btn-primary btn-lg">
            <span class="glyphicon glyphicon-home"></span>
            Take Me Home </a>
        </router-link>
      </div>
</div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>
