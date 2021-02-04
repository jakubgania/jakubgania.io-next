<template>
  <div v-if="views && views.length > 0">
    {{
      (views && views.find(({ slug }) => slug === postSlug).postViewCounter) ||
      '0'
    }}
  </div>
</template>

<script>
export default {
  props: {
    views: {
      type: Array,
      default: () => [],
    },
    postSlug: {
      type: String,
      default: '',
    },
  },
}
</script>
