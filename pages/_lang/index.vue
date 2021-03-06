<template>
  <div>
    <MenuComponent
      :show-menu="showMenu"
      @switchNavigationDrawer="switchNavigationDrawer"
    />
    <div class="container-index grid grid-rows-1">
      <div>
        <div class="split split--left">
          <div class="centered left-part">
            <div class="section">
              <h1 class="fullname">
                Jakub Gania
              </h1>
              <div class="link-section">
                <button class="link" type="button" @click="showMenu = true">
                  <span style="color: #f00;">
                    this
                  </span>
                  <span style="color: #000;">
                    .
                  </span>
                  <span style="color: #06f;">
                    showMenu
                  </span>
                  <span class="parenthesis_empty">
                    ()
                  </span>
                  <span class="parenthesis_with_text">
                    (click!)
                  </span>
                  <span>;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="split split--right">
          <div class="centered right-part">
            <div class="words-section">
              <div
                data-aos="fade-up"
                data-aos-dealy="200"
                data-aos-duration="400"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Software
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-dealy="300"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Engineering
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-dealy="600"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Code
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-dealy="800"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Development
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-dealy="1000"
                data-aos-duration="1600"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Web
                </span>
              </div>
              <div
                data-aos="fade-up"
                data-aos-dealy="1200"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <span class="technical-word">
                  Apps
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="x-top-image-container__scroll-down-container">
          <div class="x-top-image-container__cheveron" />
          <div class="x-top-image-container__cheveron" />
          <div class="x-top-image-container__cheveron" />
        </div>
      </div>
    </div>
    <ContentSectionComponent />
    <BlogSectionComponent
      :posts="posts"
      :number-of-posts="numberOfPosts"
      :views="views"
    />
    <img
      :src="ImageKeyboard($nuxt.$colorMode.preference)"
      alt=""
      style="width: 100%;"
    />
    <ProjectsSectionComponent />
    <MenuCodeListComponent />
    <SocialSectionComponent />
    <YouTubeSectionComponent />
    <TwitterSectionComponent />
    <ImagesSectionComponent />
  </div>
</template>

<script>
import axios from 'axios'
import MenuComponent from '../../components/home/Menu'
import SocialSectionComponent from '../../components/home/SocialSection'
import ContentSectionComponent from '../../components/home/ContentSection'
import ImagesSectionComponent from '../../components/home/ImagesSection'
import BlogSectionComponent from '../../components/home/BlogSection'
import ProjectsSectionComponent from '../../components/home/ProjectsSection'
import YouTubeSectionComponent from '../../components/home/YouTubeSection'
import TwitterSectionComponent from '../../components/home/TwitterSection'
import MenuCodeListComponent from '../../components/home/MenuCodeList'
import ImageKeyboardLight from '../../assets/images/keyboard-light-webp.webp'
import ImageKeyboardDark from '../../assets/images/keyboard-dark-webp.webp'

export default {
  components: {
    MenuComponent,
    SocialSectionComponent,
    ContentSectionComponent,
    ImagesSectionComponent,
    BlogSectionComponent,
    ProjectsSectionComponent,
    YouTubeSectionComponent,
    TwitterSectionComponent,
    MenuCodeListComponent,
  },
  async asyncData({ $content, params, store }) {
    const language = store.state.locale
    let numberOfPosts = await $content('posts/' + language, params.slug).fetch()

    numberOfPosts = numberOfPosts.length

    const posts = await $content('posts/' + language, params.slug)
      .only(['title', 'thumbnail', 'description', 'slug', 'creationDate'])
      .sortBy('index', 'desc')
      .limit(3)
      .fetch()

    return {
      posts,
      numberOfPosts,
    }
  },
  data() {
    return {
      ImageKeyboardLight,
      ImageKeyboardDark,
      showMenu: false,
      views: [],
      head: {
        description: this.$i18n.t('home.head.meta.description'),
        keywords: this.$i18n.t('home.head.meta.description'),
      },
    }
  },
  mounted() {
    let slugsArray = []

    slugsArray = this.posts.map(function (item) {
      return item.slug
    })

    const queryParams = slugsArray.join(',')

    axios
      .get(process.env.LAMBDA_GET_POST_VIEWS, {
        params: {
          test: queryParams,
        },
      })
      .then((response) => {
        if (response && response.data.data) {
          this.views = response.data.data
        } else {
          this.views = []
        }
      })
  },
  methods: {
    ImageKeyboard(colorMode) {
      return colorMode === 'light' ? ImageKeyboardLight : ImageKeyboardDark
    },
    switchNavigationDrawer() {
      this.showMenu = !this.showMenu
    },
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.head.description,
        },
        {
          name: 'keywords',
          content: this.head.keywords,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
      script: [
        {
          src: 'https://platform.twitter.com/widgets.js',
          async: true,
          charset: 'utf-8',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container-index::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  // background-image: url(../../assets/images/background-index.jpg);
  // background-image: url(../../assets/images/background-index-webp.webp);
  background-image: url(../../assets/images/test-908.webp);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}
.content-container {
  max-width: 800px;
  width: 100%;
}
.content-section {
  max-width: 1000px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 14px;
}
.section {
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100px;
  min-width: 300px;
  text-align: center;
}
.link-section {
  margin-top: 10px;
}
.link {
  text-decoration: none;
  color: #000;
  letter-spacing: 1px;
  transition: letter-spacing 0.2s ease;
  font-size: 14px;
  font-weight: bold;
  background-color: #f3f3f6;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 20px;
  outline: none;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;

  .parenthesis_empty {
    display: inline;
    color: #c3f;
  }

  .parenthesis_with_text {
    display: none;
    color: #c3f;
  }
}
.link:hover {
  opacity: 0.7;
  letter-spacing: 1.2px;
  transition: letter-spacing 0.2s ease;

  .parenthesis_empty {
    display: none;
  }

  .parenthesis_with_text {
    display: inline;
  }
}
.split {
  height: 100%;
  width: 50%;
  position: absolute;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;

  &--left {
    left: 0;
  }

  &--right {
    right: 0;
  }
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.left-part {
  left: 58%;
}
.right-part {
  left: 30%;
}
.technical-word {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-size: 3vw;
  letter-spacing: 0.4px;
  color: var(--home-page-top-section-text-color);
}
.fullname {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-size: 3vw;
  letter-spacing: 0.4px;
  margin-bottom: 28px;
  color: var(--home-page-top-section-text-color);
}
.words-section {
  display: grid;
  text-align: left;
  line-height: 1.2;
}
.social-icons-section {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 4px;
  z-index: 20;
  pointer-events: auto;
}
.terminal {
  width: 100%;
  max-width: 600px;
  height: 140px;
  padding-top: 3rem;
  border-radius: 6px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 16px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: #fff;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  position: fixed;
  bottom: -130px;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 4px;
  z-index: 20;
  pointer-events: auto;
}
.x-top-image-container {
  &__scroll-down-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: calc(0px + 56px);
    width: 24px;
    height: 24px;
  }

  &__scroll-down-anchor {
    position: absolute;
    z-index: 4;
  }

  &__cheveron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:first-child {
      animation: move 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
      animation: move 3s ease-out 2s infinite;
    }

    &::before,
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
      background: var(--home-page-cheveron-color);
    }

    &::before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    &::after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }
  }
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 960px) {
  .technical-word {
    font-size: 4vw;
  }
  .fullname {
    font-size: 4vw;
  }
  .left-part {
    left: 60%;
  }
  .right-part {
    left: 40%;
  }
}

@media only screen and (max-width: 600px) {
  .words-section {
    text-align: center;
  }
  .social-icons-section {
    width: 100%;
    text-align: center;
  }
  .technical-word {
    font-size: 6.4vw;
  }
  .fullname {
    font-size: 6.4vw;
  }
  .link {
    font-size: 12px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .link:hover {
    opacity: 0.7;
    letter-spacing: 1.2px;
    transition: letter-spacing 0s ease;
  }
  .section {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .split {
    width: 100%;
    padding-top: 0;

    &--left {
      height: 250px;
    }

    &--right {
      top: 240px;
      height: 320px;
      overflow-y: hidden;
    }
  }
  .left-part {
    top: 50%;
    left: 50%;
  }
  .right-part {
    left: 50%;
    top: 120px;
  }
  .social-section-title {
    margin-bottom: 40px;
  }
}
</style>
