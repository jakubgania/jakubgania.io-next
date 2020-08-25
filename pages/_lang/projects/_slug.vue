<template>
  <div>
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
