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
        <SubpageTitleSectionComponent :title="`{ posty - ${numberOfPosts} }`" />

        <div
          style="
            height: 6px;
            border-top: 1px solid #f2f2f2;
            border-bottom: 1px solid #f2f2f2;
          "
        />

        <SubpageDescriptionSectionComponent :description="desc" />

        <ul style="margin-top: 60px;">
          <li v-for="post of posts" :key="post.slug" class="post-link-item">
            <nuxt-link :to="$i18n.path('post/' + post.slug)" class="post-link">
              <div class="blog-posts-container">
                <div class="image-section">
                  <div class="image-container-er">
                    <div
                      class="img-wrap"
                      :style="`background-image: url(${post.topImageSrc})`"
                    ></div>
                  </div>
                </div>
                <div class="blog-post-item-eer4">
                  <div class="post-main-title">
                    <div class="post-title">
                      {{ post.title }}
                    </div>
                  </div>
                  <div class="description-section">
                    {{ post.description }}
                  </div>
                  <div class="creation-date">
                    <!-- {{ post.creationDate + ' | ' + '422' }} -->
                    <IconComponent
                      :path="mdiClockOutline"
                      :size="12"
                      :color="'#8c8c8c'"
                    />
                    <span style="margin-left: 4px; margin-right: 4px;">
                      {{ post.creationDate + ' | ' }}
                    </span>
                    <IconComponent
                      :path="mdiTrendingUp"
                      :size="12"
                      :color="'#8c8c8c'"
                    />
                    <span style="margin-left: 6px;">
                      {{ '424' }}
                    </span>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <template
          v-if="
            ($route.params.id < numberOfPagination ||
              $route.params.id == undefined) &&
            numberOfPagination > 2
          "
        >
          <MoreContentButtonComponent
            :text="'Następne posty'"
            :link="getLink()"
          />
        </template>
        <div id="content" style="position: relative; top: -600px;" />
      </div>
    </div>
  </div>
</template>

<script>
import { mdiClockOutline, mdiTrendingUp } from '@mdi/js'
import MoreContentButtonComponent from '../../../components/MoreContentButton'
import SubpageTitleSectionComponent from '../../../components/SubpageTitleSection'
import SubpageDescriptionSectionComponent from '../../../components/SubpageDescriptionSection'
import IconComponent from '../../../components/Icon'

export default {
  scrollToTop: false,
  components: {
    MoreContentButtonComponent,
    SubpageTitleSectionComponent,
    SubpageDescriptionSectionComponent,
    IconComponent,
  },
  async asyncData({ $content, params, store }) {
    const paginationValue = 4
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

    const posts = await $content('posts/' + language, params.slug)
      .only(['title', 'topImageSrc', 'description', 'slug', 'creationDate'])
      .sortBy('index', 'desc')
      .limit(pageNumber * paginationValue)
      .fetch()

    return {
      posts,
      numberOfPagination,
      numberOfPosts: numberOfPosts.length,
    }
  },
  data() {
    return {
      mdiClockOutline,
      mdiTrendingUp,
      desc:
        'Zapraszam do czytania postów w ramach mojego bloga. Opisuję na nim różne tematy zarówno i techniczne i nie techniczne. Czasami jest to po prostu moje przemyślenie na temat danej sytuacji, jakaś opinia na temat przeczytanej książki, czasami o technologiach lub projektach nad którymi pracuję. Oczywiście posty są pisanie jedynie przez pryzmat moich osobistych doświadczeń i przemyśleń. Posty pojawiają się czasami regularnie a czasami nie, wszystko zależy od dostępnego czasu.',
    }
  },
  mounted() {
    const topImageElement = document.querySelector('#top-image')

    window.addEventListener('scroll', function () {
      const yPosition = -(window.pageYOffset / topImageElement.dataset.speed)
      const coordinate = '50% ' + yPosition + 'px'

      document.getElementById('top-image').style.backgroundPosition = coordinate
    })

    if (this.$route.params.id >= 2) {
      const element = document.getElementById('content')
      if (element !== null) {
        element.scrollIntoView()
      }
    }
  },
  methods: {
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
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
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
  margin-top: -8px;
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
  color: #8c8c8c;
  padding-top: 4px;
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
    margin-top: 40px;
    margin-bottom: 100px;
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
}
</style>
