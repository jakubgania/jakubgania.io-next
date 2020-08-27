<template>
  <div>
    <div>
      image section
    </div>
    <div class="content-container">
      <template v-if="true">
        <div class="post-title">
          post title
        </div>
        <div class="post-content">
          <div>
            breadcrumb
          </div>
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

<style lang="scss" scoped>
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.post-title {
  font-size: 52px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  width: 100%;
  font-weight: 600;
}
.post-content {
  max-width: 1000px;
  width: 100%;
  padding: 0;
  margin: auto;
  margin-bottom: 100px;
}
.post {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 2;
  font-size: 16.8px;
  padding-top: 20px;
  max-width: 1000px;
  color: #000;
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
  .post {
    font-size: 14px;
  }
}
</style>
