<template>
  <div class="content-container">
    resources subpage
    <div>
      kategorie
    </div>
    <div>
      lista
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Zasoby',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zasoby',
        },
        {
          name: 'keywords',
          content:
            'programy, strony, portale, portale technologiczne, portale programistyczne, dokumentacje, projekty, blogi, artykuły, kanały youtube',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
}
</style>
