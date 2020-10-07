<template>
  <div class="grid grid-rows-1 title-section">
    <div class="title">
      <h2>
        {{ title }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.title-section {
  margin-bottom: 20px;
}
.title {
  font-weight: 700;
  padding-bottom: 14px;
}
</style>
