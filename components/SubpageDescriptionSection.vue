<template>
  <div class="grid grid-rows-1 description-section">
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.description-section {
  margin-top: 20px;
  margin-bottom: 20px;
}
.description {
  font-size: 16px;
  letter-spacing: 0.4px;
}
</style>
