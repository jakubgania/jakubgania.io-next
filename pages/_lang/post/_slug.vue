<template>
  <div>
    <div style="margin-left: 10px; margin-right: 10px;">
      <BreadcrumbsComponent
        parent-page-path="blog"
        parent-page-title="Blog home"
        child-page-title="Blog post"
        :max-width-wrapper="800"
      />
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
    </div>
    <div class="top-image-section">
      <img
        id="top-image"
        :src="post.topImageSrc"
        :alt="post.topImageAlt"
        class="top-image"
      />
      <template v-if="post.imageDescription">
        <span class="image-description">
          {{ post.imageDescription }}
        </span>
      </template>
    </div>
    <div v-show="false" class="top-section-title">
      <nuxt-link :to="$i18n.path('blog')">
        | posty |
      </nuxt-link>
    </div>
    <div class="content-container">
      <template v-if="true">
        <div v-show="false" class="post-title">
          {{ post.title }}
        </div>
        <div v-show="false" class="additional-info">
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
        <AboutCreator />
      </template>
    </div>
    <div v-if="numberOfPosts > 1" class="related-posts">
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
                <div
                  title=""
                  class="related-posts-image"
                  :style="`background-image: url(${next.topImageSrc})`"
                />
              </figure>
            </div>
            <div class="related-posts-caption">
              <div class="related-post-item-date">
                <IconComponent
                  :path="mdiClockOutline"
                  :size="12"
                  :color="'#000'"
                />
                <span style="margin-left: 4px; margin-right: 4px;">
                  {{ next.creationDate + ' | ' }}
                </span>
                <IconComponent
                  :path="mdiTrendingUp"
                  :size="12"
                  :color="'#000'"
                />
                <span style="margin-left: 6px;">
                  {{ '424' }}
                </span>
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
                <div
                  title=""
                  class="related-posts-image"
                  :style="`background-image: url(${prev.topImageSrc})`"
                />
              </figure>
            </div>
            <div class="related-posts-caption">
              <div class="related-post-item-date">
                <IconComponent
                  :path="mdiClockOutline"
                  :size="12"
                  :color="'#000'"
                />
                <span style="margin-left: 4px; margin-right: 4px;">
                  {{ prev.creationDate + ' | ' }}
                </span>
                <IconComponent
                  :path="mdiTrendingUp"
                  :size="12"
                  :color="'#000'"
                />
                <span style="margin-left: 6px;">
                  {{ '424' }}
                </span>
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
import { mdiClockOutline, mdiTrendingUp } from '@mdi/js'
import axios from 'axios'
import AboutCreator from '@/components/AboutCreator'
import IconComponent from '../../../components/Icon'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    AboutCreator,
    IconComponent,
    BreadcrumbsComponent,
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

    if (numberOfPosts > 1) {
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
      mdiClockOutline,
      mdiTrendingUp,
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          name: 'keywords',
          content: this.post.keywords,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title + ' | Jakub Gania Software',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Jakub Gania Software',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io' + this.$route.path,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.post.thumbnail
            ? this.post.thumbnail
            : 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.post {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.8;
  font-size: 17.4px;
  max-width: 1000px;
  color: var(--post-page-post-text-color);
}
.nuxt-content a {
  color: #06f;
  text-decoration: none;
}
.nuxt-content h3 {
  line-height: 1.1;
  margin-top: 60px;
  margin-bottom: 60px;
  font-weight: bold;
  font-size: 24px;
}
.nuxt-content h4 {
  line-height: 1.1;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 20px;
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
    top: 12px;
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
@media only screen and (max-width: 960px) {
  .nuxt-content h3 {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .nuxt-content ul {
    padding-left: 18px;
  }
  .nuxt-content li {
    &::before {
      top: 9px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .nuxt-content h3 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
  color: var(--post-page-post-title-color);
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
  color: var(--post-page-post-additional-info-color);
}
.top-image-section {
  margin-bottom: 80px;
}
.top-image {
  display: block;
  width: 100%;
  min-height: 800px;
  max-height: 800px;
  object-fit: cover;
}
.image-description {
  font-size: 10px;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: 1px;
}
.related-posts {
  max-width: 2000px;
  margin: auto;
  padding-top: 18vh;
  padding-bottom: 16vh;
  padding-left: 10px;
  padding-right: 10px;
}
.related-posts-title-section {
  margin-bottom: 60px;
}
.related-posts-title {
  font-size: 50px;
  font-weight: 800;
  // font-family: 'Roboto Mono', monospace;
  // font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
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
// .related-posts-figure::after {
//   content: '';
//   display: table;
//   clear: both;
// }
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
  color: var(--post-page-related-posts-section-color);
}
.related-post-item-date {
  font-size: 12px;
  letter-spacing: 0.8px;
  font-weight: 500;
  transition: padding-left 0.5s ease;
  display: flex;
  line-height: 1;
}
.related-post-item-description {
  padding-top: 0.5rem;
  max-width: 460px;
  transition: padding-left 0.5s ease;
  line-height: 1.1;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */

  & h4 {
    font-size: 24px;
  }
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
  border: 2px solid var(--post-page-more-posts-buttons);
  color: var(--post-page-more-posts-buttons);
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
@media only screen and (max-width: 1800px) {
  .top-image {
    min-height: auto;
  }
}
@media only screen and (max-width: 1200px) {
  .post-title {
    font-size: 52px;
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
  .post-title {
    font-size: 44px;
  }
  .other-posts-button-section {
    margin-top: 80px;
  }
  .related-posts-title {
    font-size: 40px;
  }
  .related-posts {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 8vh;
    padding-bottom: 10vh;
    padding-left: 0;
    padding-right: 0;
  }
  .related-posts-item {
    width: 100%;
    margin-bottom: 60px;
  }
  .related-post-item-description h4 {
    font-size: 18px;
  }
}
@media only screen and (max-width: 600px) {
  .top-section-title {
    margin-top: 40px;
    margin-bottom: 40px;
  }
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
  .related-posts-title {
    font-size: 30px;
  }
  .related-posts {
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 8vh;
    padding-bottom: 10vh;
  }
  .other-posts-button-section {
    margin-top: 80px;
  }
}
</style>
