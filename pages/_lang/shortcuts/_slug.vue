<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path="shortcuts"
      parent-page-title="Shortcuts"
      :child-page-title="title"
    />
  </div>
</template>

<script>
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  async asyncData({ params }) {
    const data = await import(`~/json/${params.slug}.json`)
    return {
      data,
    }
  },
  computed: {
    title() {
      return this.$route.params.slug
    },
  },
}
</script>
