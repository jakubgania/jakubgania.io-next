<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path="projects"
      parent-page-title="Projekty"
      child-page-title="Post"
    />
    <div class="post-title">
      {{ project.title }}
    </div>
    <div class="post-content">
      <nuxt-content :document="project" />
    </div>
  </div>
</template>

<script>
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  async asyncData({ $content, params, store }) {
    let language = store.state.locale

    if (params.lang === 'de') {
      language = 'de'
    }

    const project = await $content('projects/' + language, params.slug).fetch()

    return {
      project,
    }
  },
  head() {
    return {
      title: this.project.title + ' | Jakub Gania Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projekt',
        },
        {
          name: 'keywords',
          content: '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$route.params.slug + ' | Jakub Gania Software',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Jakub Gania Software',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/' + this.$route.params.slug,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Projekt',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
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

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-title {
    font-size: 30px;
  }
}
</style>
