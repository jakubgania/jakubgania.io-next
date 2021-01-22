<template>
  <div class="error-container">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
.error-container {
  min-height: 50vh;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  & h1 {
    font-weight: 800;
  }
}
</style>
