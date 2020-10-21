<template>
  <div class="content-container">
    <div class="main-title">
      Kontakt
    </div>
    <div class="email">
      contact@jakubgania.io
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
  max-width: 800px;
  width: 100%;
  margin: auto;
  min-height: 100vh;
}
.main-title {
  font-size: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.email {
  letter-spacing: 2px;
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
