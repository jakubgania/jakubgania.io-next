<template>
  <div>
    <div class="top-image-section">
      <img :src="post.topImageSrc" :alt="post.topImageAlt" class="top-image" />
    </div>
    <div class="content-container">
      <template v-if="true">
        <div class="post-title">
          {{ post.title }}
        </div>
        <div class="additional-info">
          <div style="width: 33.33%; font-size: 12px;">
            <strong style="display: block;">
              Autor
            </strong>
            <span style="display: block;">
              Jakub Gania
            </span>
          </div>
          <div style="width: 33.33%; font-size: 12px;">
            <strong style="display: block;">
              Data
            </strong>
            <span style="display: block;">
              {{ post.creationDate }}
            </span>
          </div>
          <div style="width: 33.33%; font-size: 12px;">
            <strong style="display: block;">
              Wyświetlenia
            </strong>
            <span style="display: block;">
              {{ viewCounter }}
            </span>
          </div>
        </div>
        <div class="post-content">
          <!-- <div>
            breadcrumb
          </div> -->
          <nuxt-content :document="post" class="post" />
        </div>
        <about-creator />
      </template>
    </div>
    <div class="related-posts">
      <div class="related-posts-title-section">
        <span class="related-posts-title">
          Inne posty
        </span>
      </div>
      <div class="related-posts-wrapper">
        <div class="related-posts-item">
          <nuxt-link :to="next.slug">
            <div>
              <figure class="related-posts-figure">
                <img
                  :src="next.topImageSrc"
                  alt=""
                  class="related-posts-image"
                />
              </figure>
            </div>
            <div class="related-posts-caption">
              <div class="related-post-item-date">
                {{ next.creationDate }}
              </div>
              <div class="related-post-item-description">
                <h4>
                  {{ next.title }}
                </h4>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="related-posts-item">
          <nuxt-link :to="prev.slug">
            <div>
              <figure class="related-posts-figure">
                <img
                  :src="prev.topImageSrc"
                  alt=""
                  class="related-posts-image"
                />
              </figure>
            </div>
            <div class="related-posts-caption">
              <div class="related-post-item-date">
                {{ prev.creationDate }}
              </div>
              <div class="related-post-item-description">
                <h4>
                  {{ prev.title }}
                </h4>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="other-posts-button-section">
        <div style="text-align: center;">
          <nuxt-link :to="$i18n.path('blog')" class="other-posts-button">
            {{ 'wszystkie posty - ' + numberOfPosts }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AboutCreator from '@/components/about-creator'

export default {
  components: {
    AboutCreator,
  },
  async asyncData({ $content, params, store }) {
    let language = store.state.locale
    let next = null
    let prev = null
    let numberOfPosts = null

    if (params.lang === 'de') {
      language = 'de'
    }

    const post = await $content('posts/' + language, params.slug).fetch()
    const allPosts = await $content('posts/' + language, undefined).fetch()
    numberOfPosts = allPosts.length

    const [relatedPrev, relatedNext] = await $content('posts/' + language)
      .only(['title', 'slug', 'topImageSrc', 'creationDate'])
      .sortBy('index', 'asc')
      .surround(params.slug)
      .fetch()

    if (relatedPrev != null && relatedNext != null) {
      prev = relatedPrev
      next = relatedNext
    }

    if (relatedPrev === null) {
      const related = await $content('posts/' + language)
        .where({ index: { $ne: post.index } })
        .only(['title', 'slug', 'topImageSrc', 'creationDate'])
        .sortBy('index', 'asc')
        .limit(2)
        .fetch()

      prev = related[0]
      next = related[1]
    }

    if (relatedNext === null) {
      const related = await $content('posts/' + language)
        .where({ index: { $ne: post.index } })
        .only(['title', 'slug', 'topImageSrc', 'creationDate'])
        .sortBy('index', 'desc')
        .limit(2)
        .fetch()

      prev = related[0]
      next = related[1]
    }

    return {
      post,
      prev,
      next,
      numberOfPosts,
    }
  },
  data() {
    return {
      viewCounter: null,
    }
  },
  mounted() {
    if (process.env.NODE_ENV === 'production') {
      axios
        .get(process.env.LAMBDA_PRODUCTION_URL_POST_VIEWS_COUNTER)
        .then((response) => {
          this.viewCounter = response.data.views
        })
    }

    if (process.env.NODE_ENV === 'development') {
      axios
        .get(process.env.LAMBDA_DEVELOPMENT_URL_POST_VIEWS_COUNTER)
        .then((response) => {
          this.viewCounter = response.data.views
        })
    }
  },
  head() {
    return {
      title: this.post.title + ' | Jakub Gania Software',
    }
  },
}
</script>

<style lang="scss">
.post {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 2;
  font-size: 17.4px;
  max-width: 1000px;
  color: #000;
}
.nuxt-content a {
  color: #06f;
  text-decoration: none;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content ul {
  list-style: none;
  margin-top: 40px;
  margin-bottom: 40px;
}
.nuxt-content li {
  position: relative;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #06f;
    position: absolute;
    top: 14px;
    left: -18px;
  }
}
.nuxt-content ul li a {
  overflow-wrap: break-word;
}
.nuxt-content p img {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
.nuxt-content iframe {
  width: 100%;
  height: 450px;
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
  line-height: 1;
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
.top-image-section {
  margin-bottom: 40px;
}
.top-image {
  display: block;
  width: 100%;
  max-height: 720px;
  object-fit: cover;
}
.related-posts {
  max-width: 2000px;
  // background-color: red;
  margin: auto;
  padding-top: 18vh;
  padding-bottom: 16vh;
}
.related-posts-title-section {
  margin-bottom: 60px;
}
.related-posts-title {
  font-size: 60px;
}
.related-posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.related-posts-figure {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.related-posts-figure::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 52%;
  height: 100%;
  position: relative;
  z-index: 2;
  pointer-events: none;
  // background: linear-gradient(
  //   -128deg,
  //   rgba(0, 102, 255, 0.6) 0,
  //   rgba(252, 92, 125, 0.6) 100%
  // );
}
.related-posts-image {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
}
.related-posts-caption {
  margin-top: 20px;
}
.related-post-item-date {
  font-size: 12px;
  letter-spacing: 0.8px;
  font-weight: 500;
  transition: padding-left 0.5s ease;
}
.related-post-item-description {
  padding-top: 0.5rem;
  max-width: 440px;
  transition: padding-left 0.5s ease;
  line-height: 1.1;
}
.related-posts-item {
  width: 45%;
  position: relative;

  &:hover {
    .related-posts-image {
      transform: scale(1.1);
    }
    .related-post-item-date {
      padding-left: 10px;
      transition: padding-left 0.2s ease;
    }
    .related-post-item-description {
      padding-left: 10px;
      transition: padding-left 0.5s ease;
    }
  }
}
.other-posts-button-section {
  margin-top: 180px;
}
.other-posts-button {
  border: 2px solid black;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid transparent;
    letter-spacing: 2.8px;
    transition: all 0.2s ease;
  }
}
@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-content {
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
