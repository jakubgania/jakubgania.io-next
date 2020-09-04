<template>
  <div class="content-container">
    <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return {
      project,
    }
  },
  head() {
    return {
      title: this.project.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
</style>
