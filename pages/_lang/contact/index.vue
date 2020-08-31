<template>
  <div class="grid grid-cols-1">
    <div class="content-container">
      <div>
        <h2>Kontakt</h2>
      </div>
      <ul>
        <li>Jakub Gania</li>
        <li>contact@jakubgania.io</li>
      </ul>
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
}
.email {
  padding-top: 80px;
  text-align: center;
  color: black;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 300;
}
.email-link {
  text-decoration: none;
  color: #000;
}
.email-link:hover {
  color: #999;
}
.email-link-dark-theme {
  color: #bfbfbf;
}
.email-link-dark-theme:hover {
  color: #fff;
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
