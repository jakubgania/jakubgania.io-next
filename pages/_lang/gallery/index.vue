<template>
  <div class="content-container">
    <div class="grid grid-cols-3 grid-flow-row gap-1 images-container">
      <div v-for="index in 12" :key="index" class="image-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania Software | Galeria',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description',
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
.images-container {
  margin-top: 100px;
  margin-bottom: 200px;
}
.image-item {
  padding-top: 100%;
  background-color: #f2f2f2;
}
</style>
