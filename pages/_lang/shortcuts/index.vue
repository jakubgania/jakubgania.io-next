<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Shortcuts"
    />
    <div class="title-section">
      <h2>
        Shortcuts
      </h2>
    </div>
    <div class="top-description">
      <p>
        Przydatne skróty klawiaturowe do różnych programów i systemów
        operacyjnych. Lista stale aktualizowana.
      </p>
    </div>
    <ul class="links-section">
      <li v-for="item in shortcuts" :key="item.id" class="link-text">
        <nuxt-link :to="`/shortcuts` + item.path">
          <span>
            {{ item.title }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import shortcutsList from '../../../json/list-of-shortcuts.json'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      shortcuts: shortcutsList.data,
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Shortcuts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zasoby',
        },
        {
          name: 'keywords',
          content: '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Shortcuts | Jakub Gania Software',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'https://jakubgania.io/shortcuts',
        },
        {
          hid: 'og:description',
          proprty: 'og:description',
          content: 'Shortcuts',
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
}
.title-section {
  margin-bottom: 40px;
}
.top-description {
  margin-bottom: 80px;
}
.links-section {
  margin-bottom: 100px;
}
.link-text {
  margin-top: 14px;
  margin-bottom: 14px;
}
</style>
