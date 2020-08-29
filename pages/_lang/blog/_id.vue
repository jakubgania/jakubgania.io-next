<template>
  <div>
    <div
      class="top-image--light"
      style="margin-top: -6px; margin-bottom: 40px;"
    >
      <div
        data-aos="fade-in"
        data-aos-dealy="100"
        data-aos-duration="1200"
        data-aos-once="true"
        class="x1"
      >
        <div class="x2">
          <div class="x3">
            Blog
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-rows-1">
      <div class="content-container">
        <div>
          <!-- {{ 'posty - ' + posts.length }} -->
        </div>

        <ul>
          <li v-for="post of posts" :key="post.slug" class="post-link-item">
            <nuxt-link
              :to="{ name: 'blog-slug', params: { slug: post.slug } }"
              class="post-link"
            >
              <div class="post-main-title">
                <div class="post-title">
                  {{ post.title }}
                </div>
              </div>
              <div class="description-section">
                {{ post.description }}
              </div>
              <div class="creation-date">
                {{ post.creationDate }}
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div v-if="$route.params.id < 4" class="pagination-button-section">
          <nuxt-link :to="getLink()">
            Następne posty
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  async asyncData({ $content, params }) {
    let pageNumber = 1
    if (params.id !== undefined) {
      pageNumber = params.id
    }

    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'slug', 'creationDate'])
      .sortBy('creationDate', 'desc')
      .limit(pageNumber * 3)
      .fetch()

    return {
      posts,
    }
  },
  methods: {
    getLink() {
      let pageNumber = 1
      if (this.$route.params.id !== undefined) {
        pageNumber = this.$route.params.id
      }

      pageNumber++
      return '/blog/' + pageNumber
    },
  },
  head() {
    return {
      title: 'Jakub Gania Software | Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description',
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
  margin-bottom: 80px;
}
.top-image {
  width: 100%;
  height: 40vw;
  min-height: 200px;
  margin-top: -6px;
  margin-bottom: 80px;
  position: relative;

  &--dark {
    // background-image: url('../../assets/images/dotted-wawes-dark.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &--light {
    background-image: url('../../../assets/images/dotted-wawes-light.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.x1 {
  width: 100%;
  height: 40vw;
}
.x2 {
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 10;
}
.x3 {
  text-align: center;
  color: #000;
  text-transform: uppercase;
  font-size: 10vw;
  font-weight: 900;
  letter-spacing: 8px;
  -webkit-font-smoothing: antialiased;
}
.post-link-item {
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.post-link-dark-theme {
  color: #bfbfbf;
}
.post-main-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.4px;
  display: flex;
  padding-top: 2px;
  padding-bottom: 4px;
}
.post-link {
  text-decoration: none;
  color: #000;

  &:hover {
    .post-main-title {
      color: #06f;
    }
  }
}
.post-title {
  font-size: 20px;
}
.description-section {
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: 0.4px;
  padding-bottom: 10px;
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}
.pagination-button-section {
  margin-top: 60px;
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
  .post-main-title {
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .post-title {
    font-size: 16px;
    padding-left: 0;
  }
  .creation-date {
    padding-left: 0;
  }
}
</style>
