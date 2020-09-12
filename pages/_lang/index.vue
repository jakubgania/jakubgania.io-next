<template>
  <div>
    <div class="container-index grid grid-rows-1">
      <div>
        <div class="split split--left">
          <div class="centered left-part">
            <div class="section">
              <div class="fullname">
                Jakub Gania
              </div>
              <div class="link-section">
                <nuxt-link :to="$i18n.path('')" class="link">
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
                </nuxt-link>
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
      </div>
    </div>
    <div class="section-content-wrapper">
      <div class="section-content">
        <div class="section-content-row">
          <div class="section-content-row__title">
            <h2>
              Technologie Webowe
            </h2>
          </div>
          <div class="section-content-row__icons-section">
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiReact" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiVuejs" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiLanguageJavascript" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiLanguageHtml5" :size="44" />
            </div>
          </div>
          <div class="section-content-row__description">
            {{ desc1 }}
          </div>
        </div>
        <div class="section-content-row">
          <div class="section-content-row__title">
            <h2>
              Technologie Chmurowe
            </h2>
          </div>
          <div class="section-content-row__icons-section">
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiCloudTags" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiGoogleCloud" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiMicrosoftAzure" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiAws" :size="44" />
            </div>
          </div>
          <div class="section-content-row__description">
            {{ desc2 }}
          </div>
        </div>
        <div class="section-content-row">
          <div class="section-content-row__title">
            <h2>
              Software Engineering
            </h2>
          </div>
          <div class="section-content-row__icons-section">
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiCodeBraces" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiDocker" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiWebpack" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiBash" :size="44" />
            </div>
          </div>
          <div class="section-content-row__description">
            {{ desc3 }}
          </div>
        </div>
        <div class="section-content-row">
          <div class="section-content-row__title">
            <h2>
              IT i Technologie
            </h2>
          </div>
          <div class="section-content-row__icons-section">
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiServer" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiConsoleLine" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiSourceBranch" :size="44" />
            </div>
            <div class="section-content-row__icon-item">
              <icon-component :path="mdiMicrosoftVisualStudioCode" :size="44" />
            </div>
          </div>
          <div class="section-content-row__description">
            {{ desc4 }}
          </div>
        </div>
      </div>
    </div>
    <div class="blog-section-wrapper">
      <div class="blog-section-container">
        <div class="blog-section-title">
          <h2>
            BLOG
          </h2>
        </div>
        <div>
          <ul>
            <li v-for="post of posts" :key="post.slug" class="post-link-item">
              <nuxt-link
                :to="$i18n.path('post/' + post.slug)"
                class="post-link"
              >
                <div style="display: flex;">
                  <div class="image-section">
                    <div class="image-container"></div>
                  </div>
                  <div style="width: 65%; padding-left: 24px;">
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
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="pagination-button-section">
          <nuxt-link :to="$i18n.path('blog')" class="more-posts-button">
            Więcej postów
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="projects-section">
      <div class="projects-section-wrapper">
        <div class="projects-section-title">
          <h2>
            Projekty
          </h2>
        </div>
        <div class="projects-sections-container">
          <div class="projects-item">
            <ul class="project-list">
              <li>
                <nuxt-link :to="$i18n.path('projects/jakubgania-io')">
                  jakubgania.io
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('projects/python-scripts')">
                  python-scripts
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('projects/hypercode-it')">
                  hypercode-it
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="projects-item">
            <ul class="project-list">
              <li>
                <nuxt-link :to="$i18n.path('projects/business-page-project-2')">
                  business-page-project-2
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  :to="
                    $i18n.path('projects/angular8-omdbapi-movie-search-engine')
                  "
                >
                  angular8-omdbapi-movie-search-engine
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="$i18n.path('projects/yourcity-frontend')">
                  yourcity-frontend
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="pagination-button-section">
          <nuxt-link :to="$i18n.path('projects')" class="more-posts-button">
            Więcej projektów
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="social-section">
      <div class="social-section-wrapper">
        <div class="social-section-title">
          <h2>
            Social
          </h2>
        </div>
        <div class="social-section-container">
          <div class="social-icon-item">
            <icon-component :path="mdiGithub" :size="44" />
            <span class="social-icon-describe">
              Github
            </span>
          </div>
          <div class="social-icon-item">
            <icon-component :path="mdiLinkedin" :size="44" />
            <span class="social-icon-describe">
              LinkedIn
            </span>
          </div>
          <div class="social-icon-item">
            <icon-component :path="mdiTwitter" :size="44" />
            <span class="social-icon-describe">
              Twitter
            </span>
          </div>
          <div class="social-icon-item">
            <icon-component :path="mdiYoutube" :size="44" />
            <span class="social-icon-describe">
              YouTube
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="images-section">
      <section class="imgages-section-wrapper">
        <div class="trending-grid-items">
          <nuxt-link to="/">
            <div class="trending-grid-item trending-item-1">
              <div
                class="img-wrap"
                :style="`background-image: url(${Image1})`"
              ></div>
              <div class="img-inner">
                <header>
                  <p class="trending-post-title">
                    Blog
                  </p>
                </header>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="trending-grid-item trending-item-2">
              <div
                class="img-wrap"
                :style="`background-image: url(${Image2})`"
              ></div>
              <div class="img-inner">
                <header>
                  <p class="trending-post-title">
                    Doświadczenie
                  </p>
                </header>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="trending-grid-item trending-item-3">
              <div
                class="img-wrap"
                :style="`background-image: url(${Image3})`"
              ></div>
              <div class="img-inner">
                <header>
                  <p class="trending-post-title">
                    Kontakt
                  </p>
                </header>
              </div>
            </div>
          </nuxt-link>
          <nuxt-link to="/">
            <div class="trending-grid-item trending-item-4">
              <div
                class="img-wrap"
                :style="`background-image: url(${Image4})`"
              ></div>
              <div class="img-inner">
                <header>
                  <p class="trending-post-title">
                    Galeria
                  </p>
                </header>
              </div>
            </div>
          </nuxt-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import {
  mdiReact,
  mdiVuejs,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiCloudTags,
  mdiGoogleCloud,
  mdiMicrosoftAzure,
  mdiAws,
  mdiBash,
  mdiDocker,
  mdiWebpack,
  mdiServer,
  mdiCodeBraces,
  mdiConsoleLine,
  mdiSourceBranch,
  mdiMicrosoftVisualStudioCode,
  mdiGithub,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube,
} from '@mdi/js'
import IconComponent from '../../components/icon'
import Image1 from '../../assets/images/background-home.jpg'
import Image2 from '../../assets/images/stickers-home.jpg'
import Image3 from '../../assets/images/keyboard-home.jpeg'
import Image4 from '../../assets/images/dotted-wawes-light.jpg'

export default {
  async asyncData({ $content, params, store }) {
    // const paginationValue = 3
    let language = store.state.locale

    if (params.lang === 'de') {
      language = 'de'
    }

    const numberOfPosts = await $content(
      'posts/' + language,
      params.slug
    ).fetch()

    const posts = await $content('posts/' + language, params.slug)
      .only(['title', 'description', 'slug', 'creationDate'])
      .sortBy('creationDate', 'desc')
      .limit(3)
      .fetch()

    return {
      posts,
      numberOfPosts,
    }
  },
  components: {
    'icon-component': IconComponent,
  },
  data() {
    return {
      Image1,
      Image2,
      Image3,
      Image4,
      mdiReact,
      mdiVuejs,
      mdiLanguageJavascript,
      mdiLanguageHtml5,
      mdiCloudTags,
      mdiGoogleCloud,
      mdiMicrosoftAzure,
      mdiAws,
      mdiBash,
      mdiDocker,
      mdiWebpack,
      mdiServer,
      mdiCodeBraces,
      mdiConsoleLine,
      mdiSourceBranch,
      mdiMicrosoftVisualStudioCode,
      mdiGithub,
      mdiLinkedin,
      mdiTwitter,
      mdiYoutube,
      iconsSize: 44,
      desc1:
        'Główne technologie w jaki się specjalizję to technologie z szeroko rozumianego stosu webowego. Są to technologie zarówno frontendowe takie jak React, Vue, Angular, Nuxt oraz backendowe takie jak Node czy Laravel. Tworzę różny skrypty z użyciem Bash czy Python. Większość mojej pracy i eksperymentów umieszczam na platformie Github.',
      desc2:
        'Technologie chmurowe to bardzo ważny aspekt współczesnych systemów informatycznych. Chmura daje możliwości praktycznie nieograniczonego skalowania aplikacji oraz łatej integrcji wielu komponentów. To naprawdę wiele zalet i możliwości oraz inne podejśćie do budowania złożonych struktór. Jest to kierunek w którym rozwijam się od jesieni 2019 roku i coraz bardziej mnie wciąga.',
      desc3:
        'Dziedina jaką jest inżynieria oprogramowania jest złożonym zagadnieniem. Tworzenie aplikacji w różnych technologiach, odmienne koncepcje języków programowania, wysublimowane architektóry, bezpieczeńśtwo, bazy danych ... Wymieniać można bez końca a trndy i technologie ewoluują. To wszystko bardzo mnie interesuje dlatego staram się poznawać coraz lepiej wszelkie aspekty z tym związane.',
      desc4:
        'Szeroko pojęte IT i różne inne technologie cały czas zasakują i rozwijają się bardzo szybko. Takie zagadnienia jak sztuczna inteligencja czy Big Data to pojęcia wykorzystywane na porządku dziennym na całym świecie. Dziś ciężko znaleźć duży zbiór danych niewspomagany czy to przez SI czy analizę Big Data. ',
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software',
    }
  },
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.container-index::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../assets/images/background-index.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.1;
}
.content-container {
  max-width: 800px;
  width: 100%;
}
.content-section {
  max-width: 1000px;
  width: 100%;
  // position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  padding: 14px;
}
.section {
  // border-top: 2px solid #0066ff;
  // border-bottom: 2px solid #0066ff;
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
  background-color: #fff;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 20px;
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
  left: 70%;
}
.right-part {
  left: 30%;
}
.technical-word {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-size: 2vw;
  letter-spacing: 0.4px;
}
.fullname {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-size: 2vw;
  letter-spacing: 0.4px;
  margin-bottom: 28px;
}
.words-section {
  display: grid;
  text-align: left;
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
.section-content-wrapper {
  margin-top: 100vh;
  background-color: #fafbfc;
  padding-top: 140px;
  padding-bottom: 140px;
}
.section-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: auto;
}
.section-content-row {
  max-width: 50%;
  width: 100%;
  padding: 60px;

  &:first-child {
    margin-bottom: 80px;
  }

  &__title {
    margin-bottom: 24px;
    font-weight: 800;
    background-image: linear-gradient(101deg, #fc466b, #3f5efb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__description {
    font-size: 14.4px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 1.6;
  }

  &__icons-section {
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  &__icon-item {
    width: 25%;
  }
}
.social-section {
  padding-top: 140px;
  padding-bottom: 140px;
}
.social-section-wrapper {
  max-width: 1600px;
  margin: auto;
}
.social-section-container {
  display: flex;
}
.social-icon-item {
  padding: 60px;
  width: 25%;
  display: inline-flex;
  line-height: 40px;
}
.social-icon-describe {
  font-size: 10px;
  margin-left: 20px;
  letter-spacing: 6px;
  font-weight: 900;
}
.social-section-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 80px;
}
.blog-section-wrapper {
  margin: auto;
  // background-color: black;
}
.blog-section-container {
  max-width: 1600px;
  margin: auto;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 140px;
  padding-bottom: 140px;
}
.blog-section-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 80px;
  // color: white;
}
.post-link-item {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;
}
.post-main-title {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.4px;
  display: flex;
  // padding-top: 2px;
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
  // color: white;
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}
.image-section {
  width: 35%;
}
.image-container {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.pagination-button-section {
  margin-top: 120px;
  // margin-bottom: 140px;
  text-align: center;
}
.more-posts-button {
  border-radius: 6px;
  font-weight: bold;
  letter-spacing: 0.2px;
  padding: 0.5rem 3rem;
  color: black;
  font-size: 12px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #6a82fb, #fc5c7d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
}
.projects-section {
  max-width: 1600px;
  margin: auto;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 140px;
  padding-bottom: 140px;
}
.projects-section-wrapper {
  margin: auto;
}
.projects-section-title {
  font-weight: 800;
  text-align: center;
}
.projects-sections-container {
  display: flex;
}
.projects-item {
  width: 50%;
}
.projects-item ul {
  list-style: none;
  margin-top: 80px;
}
.projects-item ul li {
  margin-bottom: 40px;
  letter-spacing: 1.2px;
}
.projects-item ul li::before {
  content: '\2022';
  color: block;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  font-size: 20px;
}
.images-section {
  //
}
.images-section-wrapper {
  width: 100%;
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
.trending-grid-items::after {
  content: '';
  display: table;
  clear: both;
}
.trending-grid-item {
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    .img-wrap {
      transform: scale(1.1);
    }
  }
}
.trending-grid-item::before {
  height: 100%;
  position: relative;
  z-index: 2;
  pointer-events: none;
  // background: linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0.75) 0,
  //   rgba(0, 102, 255, 0.4) 100%
  // );
  background: linear-gradient(
    -128deg,
    rgba(0, 102, 255, 0.6) 0,
    rgba(252, 92, 125, 0.6) 100%
  );
}
.trending-item-1 {
  width: 62%;
  background-color: #3f5efb;
  float: left;
  position: relative;
}
.trending-item-1::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 52%;
}
.trending-item-2 {
  width: 38%;
  background-color: cadetblue;
  position: relative;
  float: left;
}
.trending-item-2::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 45.58%;
}
.trending-item-3 {
  width: 19%;
  background-color: #fc466b;
  float: left;
  position: relative;
}
.trending-item-3::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 78.48101%;
}
.trending-item-4 {
  width: 19%;
  background-color: #8c8c8c;
  float: left;
  position: relative;
}
.trending-item-4::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 78.48101%;
}
.img-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.trending-post-title {
  font-size: 2.25em;
  color: #fff;
  line-height: 1.3em;
  font-weight: 500;
  margin: 0;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.8);
  max-width: 100%;
}
.trending-grid-item header {
  display: block;
  float: none;
  bottom: 0;
  z-index: 3;
  position: absolute;
  padding: 2em 1.5em 1.5em 2em;
}

@media only screen and (max-width: 1100px) {
  .trending-item-1 {
    width: 50%;
  }
  .trending-item-1::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-2 {
    width: 50%;
  }
  .trending-item-2::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-3 {
    width: 50%;
  }
  .trending-item-3::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-4 {
    width: 50%;
  }
  .trending-item-4::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
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
    font-size: 5.6vw;
  }
  .fullname {
    font-size: 5.6vw;
  }
  .section {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .split {
    width: 100%;
    padding-top: 0;

    &--left {
      height: 280px;
    }

    &--right {
      top: 280px;
      height: 360px;
      overflow-y: hidden;
    }
  }
  .left-part {
    top: 60%;
    left: 50%;
  }
  .right-part {
    left: 50%;
    top: 140px;
  }
}
</style>
