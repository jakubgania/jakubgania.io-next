<template>
  <div class="grid grid-cols-1">
    <div class="content-container">
      <div class="left-section">
        2
      </div>
      <div class="right-section">
        <div class="right-section-container">
          Kontakt
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania Software | Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description',
        },
        {
          name: 'keywords',
          contact: 'Kontakt',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: inherit;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
}
.left-section {
  width: 50%;
  background-color: red;
}
.right-section {
  width: 50%;
  background-color: blue;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
