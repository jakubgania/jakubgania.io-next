<template>
  <div>
    <div>
      image section
    </div>
    <div class="content-container">
      <template v-if="true">
        <div class="post-title">
          Example post title 2020
        </div>
        <div class="additional-info">
          <div style="width: 33.33%; font-size: 12px;">
            <strong style="display: block;">Autor</strong>
            <span style="display: block;">Jakub Gania</span>
          </div>
          <div style="width: 33.33%; font-size: 12px;">
            <strong style="display: block;">Data</strong>
            <span style="display: block;">19-02-2020 22:04</span>
          </div>
        </div>
        <div class="post-content">
          <!-- <div>
            breadcrumb
          </div> -->
          <nuxt-content :document="post" class="post" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return {
      post,
    }
  },
  head() {
    return {
      title: this.post.title,
    }
  },
}
</script>

<style>
.post {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 2;
  font-size: 17.4px;
  max-width: 1000px;
  color: #000;
}
@media only screen and (max-width: 600px) {
  .post {
    font-size: 14px;
  }
}
</style>

<style lang="scss" scoped>
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.post-title {
  max-width: 800px;
  font-size: 60px;
  text-align: left;
  margin: auto;
  width: 100%;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
}
.post-content {
  max-width: 800px;
  width: 100%;
  padding: 0;
  margin: auto;
  margin-bottom: 100px;
}
.additional-info {
  display: flex;
  max-width: 800px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
}
@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-content {
    // margin: auto;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 600px) {
  .content-container {
    width: 100%;
    margin-top: 40px;
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-title {
    margin-top: 0;
    font-size: 30px;
  }
  .post-content {
    width: 100%;
  }
}
</style>
