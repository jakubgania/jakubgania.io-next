<template>
  <div class="content-container">
    <div class="post-title">
      {{ project.title }}
    </div>
    <nuxt-content :document="project" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug)
      .only(['title'])
      .fetch()

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
.post-title {
  max-width: 1000px;
  font-size: 60px;
  text-align: left;
  margin: auto;
  width: 100%;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  line-height: 1.0;
}
</style>
