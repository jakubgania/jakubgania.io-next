<template>
  <div class="content-container">
    content
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const data = await import(`~/json/${params.slug}.json`)
    return {
      data,
    }
  },
}
</script>
