<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path="projects"
      parent-page-title="Projekty"
      child-page-title="Post"
    />
    <h1 class="post-title">
      {{ project.title }}
    </h1>
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

    if (params.lang === 'en') {
      language = 'en'
    }

    const project = await $content('projects/' + language, params.slug).fetch()

    return {
      project,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
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

<style lang="scss">
.nuxt-content div pre {
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding-top: 3rem;
  border-radius: 10px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 16px;
  box-shadow: 5px 5px 15px 0 rgba(190, 190, 190, 0.6);
  background-color: #f0f0f0;
  padding-bottom: 14px;

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 10px;
  }
}
.nuxt-content div pre code .token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background-color: #f0f0f0;
}
.nuxt-content li {
  position: relative;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #06f;
    position: absolute;
    top: 9px;
    left: -18px;
  }
}
</style>

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
