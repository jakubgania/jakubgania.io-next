<template>
  <div>
    <div
      id="top-image"
      class="top-image"
      style="margin-top: -6px;"
      data-type="parallax"
      data-speed="-2"
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
        <div class="top-section-title">
          <div style="line-height: 1.5; display: flex; margin-left: 5px;">
            <nuxt-link
              :to="$i18n.path('')"
              style="margin-right: 14px; color: #06f;"
            >
              Home
            </nuxt-link>
            <IconComponent :path="mdiChevronRight" :size="14" :color="'#000'" />
            <span style="margin-left: 14px;">
              Blog
            </span>
          </div>
        </div>

        <SubpageTitleSectionComponent :title="`{ posty - ${numberOfPosts} }`" />

        <div style="height: 1px; border-top: 1px solid #f2f2f2;" />

        <SubpageDescriptionSectionComponent :description="desc" />

        <div style="height: 1px; border-top: 1px solid #f2f2f2;" />

        <ul style="margin-top: 60px;">
          <li v-for="post of posts" :key="post.slug" class="post-link-item">
            <nuxt-link :to="$i18n.path('post/' + post.slug)" class="post-link">
              <div class="blog-posts-container">
                <div class="blog-post-item-eer4 mobile-xs-a">
                  <div class="post-main-title">
                    <div class="post-title">
                      {{ post.title }}
                    </div>
                  </div>
                  <div class="creation-date">
                    <IconComponent
                      :path="mdiClockOutline"
                      :size="12"
                      :color="'#b3b3b3'"
                    />
                    <span style="margin-left: 4px; margin-right: 4px;">
                      {{ post.creationDate + ' | ' }}
                    </span>
                    <IconComponent
                      :path="mdiTrendingUp"
                      :size="12"
                      :color="'#b3b3b3'"
                    />
                    <span style="margin-left: 6px;">
                      {{ '424' }}
                    </span>
                  </div>
                </div>
                <div class="image-section">
                  <div class="image-container-er">
                    <div
                      class="img-wrap"
                      :style="`background-image: url(${post.thumbnail})`"
                    ></div>
                  </div>
                </div>
                <div class="blog-post-item-eer4">
                  <div class="mobile-xs-b">
                    <div class="post-main-title">
                      <div class="post-title">
                        {{ post.title }}
                      </div>
                    </div>
                    <div class="creation-date">
                      <IconComponent
                        :path="mdiClockOutline"
                        :size="12"
                        :color="'#b3b3b3'"
                      />
                      <span style="margin-left: 4px; margin-right: 4px;">
                        {{ post.creationDate + ' | ' }}
                      </span>
                      <IconComponent
                        :path="mdiTrendingUp"
                        :size="12"
                        :color="'#b3b3b3'"
                      />
                      <span style="margin-left: 6px;">
                        {{ '424' }}
                      </span>
                    </div>
                  </div>
                  <div class="description-section">
                    {{ post.description }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div style="display: flex;">
          <div style="width: 50%;">
            <template v-if="$route.params.id > 1">
              <MoreContentButtonComponent
                :text="'< Poprzednie'"
                :link="prevLink()"
              />
            </template>
          </div>
          <div style="width: 50%;">
            <template
              v-if="
                ($route.params.id < numberOfPagination ||
                  $route.params.id == undefined) &&
                numberOfPagination > 2
              "
            >
              <MoreContentButtonComponent
                :text="'Następne >'"
                :link="getLink()"
              />
            </template>
          </div>
        </div>
        <div id="content" style="position: relative; top: -600px;" />
      </div>
    </div>
  </div>
</template>

<script>
import { mdiChevronRight, mdiClockOutline, mdiTrendingUp } from '@mdi/js'
import MoreContentButtonComponent from '../../../components/MoreContentButton'
import SubpageTitleSectionComponent from '../../../components/SubpageTitleSection'
import SubpageDescriptionSectionComponent from '../../../components/SubpageDescriptionSection'
import IconComponent from '../../../components/Icon'

export default {
  scrollToTop: true,
  components: {
    MoreContentButtonComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent,
    IconComponent,
  },
  async asyncData({ $content, params, store }) {
    const paginationValue = 6
    let pageNumber = 1
    let numberOfPagination = null
    let language = store.state.locale

    if (params.lang === 'de') {
      language = 'de'
    }

    if (params.id !== undefined) {
      pageNumber = params.id
    }

    const numberOfPosts = await $content(
      'posts/' + language,
      params.slug
    ).fetch()

    if (numberOfPosts.length % paginationValue === 0) {
      numberOfPagination = Math.floor(numberOfPosts.length / paginationValue)
    }

    if (numberOfPosts.length % paginationValue !== 0) {
      numberOfPagination =
        Math.floor(numberOfPosts.length / paginationValue) + 1
    }

    // const posts = await $content('posts/' + language, params.slug)
    //   .only(['title', 'thumbnail', 'description', 'slug', 'creationDate'])
    //   .sortBy('index', 'desc')
    //   .limit(pageNumber * paginationValue)
    //   .fetch()

    pageNumber = pageNumber - 1

    const posts = await $content('posts/' + language, params.slug)
      .only(['title', 'thumbnail', 'description', 'slug', 'creationDate'])
      .sortBy('index', 'desc')
      .skip(pageNumber * paginationValue)
      .limit(paginationValue)
      .fetch()

    return {
      posts,
      numberOfPagination,
      numberOfPosts: numberOfPosts.length,
    }
  },
  data() {
    return {
      mdiChevronRight,
      mdiClockOutline,
      mdiTrendingUp,
      desc:
        'Zapraszam do czytania postów w ramach mojego bloga. Opisuję na nim różne tematy zarówno i techniczne i nie techniczne. Czasami jest to po prostu moje przemyślenie na temat danej sytuacji, jakaś opinia na temat przeczytanej książki, czasami o technologiach lub projektach nad którymi pracuję. Oczywiście posty są pisanie jedynie przez pryzmat moich osobistych doświadczeń i przemyśleń. Posty pojawiają się czasami regularnie a czasami nie, wszystko zależy od dostępnego czasu.',
    }
  },
  mounted() {
    // const topImageElement = document.querySelector('#top-image')

    // window.addEventListener('scroll', function () {
    //   const yPosition = -(window.pageYOffset / topImageElement.dataset.speed)
    //   const coordinate = '50% ' + yPosition + 'px'

    //   document.getElementById('top-image').style.backgroundPosition = coordinate
    // })
    // test

    if (this.$route.params.id >= 2) {
      const element = document.getElementById('content')
      if (element !== null) {
        element.scrollIntoView()
      }
    }
  },
  methods: {
    prevLink() {
      let pageNumber = 1

      if (this.$route.params.id !== undefined) {
        pageNumber = this.$route.params.id
      }

      pageNumber = pageNumber - 1
      return 'blog/' + pageNumber
    },
    getLink() {
      let pageNumber = 1

      if (this.$route.params.id !== undefined) {
        pageNumber = this.$route.params.id
      }

      pageNumber++
      return 'blog/' + pageNumber
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
        {
          name: 'keywords',
          content: 'posty, wpisy, notatki, blog',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Blog',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/blog',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Zapraszam do czytania postów w ramach mojego bloga.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.top-section-title {
  max-width: 1200px;
  margin-bottom: 80px;
  margin-top: 20px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-style: normal;
  font-size: 10px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 4px;
}
.content-container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 140px;
}
.top-image {
  width: 100%;
  height: 40vw;
  min-height: 200px;
  margin-top: -6px;
  position: relative;
  background-image: var(--blog-page-top-image-path);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  color: var(--blog-page-top-image-title-color);
  text-transform: uppercase;
  font-size: 10vw;
  font-weight: 900;
  letter-spacing: 8px;
  -webkit-font-smoothing: antialiased;
}
.post-link-item {
  margin-top: 0;
  margin-bottom: 60px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.post-link-dark-theme {
  color: #bfbfbf;
}
.post-main-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1.2px;
  display: flex;
  padding-bottom: 4px;
  color: var(--blog-page-post-title-color);
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
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
  line-height: 1;
}
.description-section {
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: 0.4px;
  padding-bottom: 10px;
  color: var(--blog-page-post-description-color);
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #b3b3b3;
  padding-top: 4px;
  padding-bottom: 10px;
  display: flex;
  line-height: 1;
}
.image-section {
  width: 40%;
}
.image-container-er {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
}
.image-container-er::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.img-wrap {
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
.blog-posts-container {
  display: flex;
  flex-flow: wrap;
}
.blog-post-item-eer4 {
  width: 60%;
  padding-left: 24px;
}
.mobile-xs-a {
  display: none;
}
.mobile-xs-b {
  display: inherit;
}

@media only screen and (max-width: 1240px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .top-section-title {
    margin-bottom: 40px;
    margin-top: 20px;
  }
}
@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .post-main-title {
    font-size: 18px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 40px;
    margin-bottom: 100px;
  }
  .top-section-title {
    margin-bottom: 30px;
    margin-top: 0;
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
  .image-section {
    width: 100%;
  }
  .blog-section-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .blog-post-item-eer4 {
    padding-left: 0;
    width: 100%;
    margin-top: 20px;
  }
  .post-link-item {
    margin-bottom: 40px;
  }
  .mobile-xs-a {
    display: block;
  }
  .mobile-xs-b {
    display: none;
  }
}
</style>
