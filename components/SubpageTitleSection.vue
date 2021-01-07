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
  color: var(--color-text);
  padding-bottom: 14px;
}

@media only screen and (max-width: 600px) {
  .title-section {
    margin-bottom: 10px;
  }
  .title h2 {
    font-size: 28px;
  }
}
</style>
