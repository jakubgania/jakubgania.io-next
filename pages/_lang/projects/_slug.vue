<template>
  <div class="content-container">
    <div class="post-title">
      {{ project.title }}
    </div>
    <div class="post-content">
      <nuxt-content :document="project" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let lang = 'pl'

    if (params.lang === 'de') {
      lang = 'de'
    }

    const project = await $content('projects/' + lang, params.slug).fetch()

    console.log('lang ', params.lang)
    console.log('xdm', project)

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
  margin-top: 100px;
  margin-bottom: 100px;
}
.post-title {
  max-width: 1000px;
  font-size: 60px;
  text-align: left;
  margin: auto;
  width: 100%;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  line-height: 1;
}
.post-content {
  margin-top: 40px;
}
</style>
