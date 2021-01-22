<template>
  <div>
    <h2 class="head-title">
      {{ sectionTitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: 'Section',
    },
  },
}
</script>

<style lang="scss" scoped>
.head-title {
  letter-spacing: 1px;
  font-size: 54px;
  font-weight: 700;
  color: var(--color-text);

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 80px;
    height: 2px;
    background-color: #06f;
    margin-top: 20px;
  }
}

@media only screen and (max-width: 960px) {
  .head-title {
    font-size: 38px;
  }
}

@media only screen and (max-width: 600px) {
  .head-title {
    font-size: 22px;
  }
}
</style>
