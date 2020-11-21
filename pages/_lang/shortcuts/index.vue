<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Shortcuts"
    />
    <ul>
      <li v-for="item in shortcuts" :key="item.id">
        <nuxt-link :to="`/shortcuts` + item.path" class="link">
          {{ item.title }}
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
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
}
.link {
  text-align: none;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
