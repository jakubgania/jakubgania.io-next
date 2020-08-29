<template>
  <div v-if="displayHeader()" class="toolbar-header-container">
    toolbar header
  </div>
</template>

<script>
export default {
  mounted() {
    this.displayHeader()
  },
  methods: {
    displayHeader() {
      console.log(this.$route.name)
      return this.$route.name !== 'index'
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar-header-container {
  height: 64px;
  background: hsla(0, 0%, 100%, 0.6);
  backdrop-filter: saturate(180%) blur(14px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  line-height: 64px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
