<template>
  <footer class="footer-container">
    <div class="footer-container__sitemap-section">
      <div class="footer-container__logo-section">
        <logo-component :normal-font-size="true" />
      </div>
      <div class="footer-container__x">
        <div class="footer-container__sites-section">
          <div
            v-for="item in sites"
            :key="item.id"
            class="footer-container__site-column-section"
          >
            <div class="footer-container__site-column-title">
              {{ item.titleColumn }}
            </div>
            <div class="footer-container__site-coulmn-list-section">
              <ul style="list-style-type: none; padding-left: 0;">
                <li
                  v-for="element in item.elements"
                  :key="element.id"
                  class="list-li"
                >
                  <template v-if="element.link || element.link === ''">
                    <nuxt-link
                      :to="$i18n.path(element.link)"
                      class="footer-container__site-column-link"
                    >
                      {{ element.name }}
                    </nuxt-link>
                  </template>
                  <template v-if="element.href">
                    <a
                      :href="element.href"
                      class="footer-container__site-column-link"
                      target="_blank"
                    >
                      {{ element.name }}
                    </a>
                  </template>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-container__other-elements">
          <div class="footer-container__dark-theme-switch-section">
            dark theme
            <!-- <template v-if="$store.state.showDarkModeSwitch">
              <dark-mode-switch-component />
            </template> -->
          </div>
          <div class="footer-container__github-button-section">
            github button
            <!-- <github-button
              href="https://github.com/jakubgania"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @jakubgania on GitHub"
            >
              Follow @jakubgania
            </github-button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container__bottom-section">
      <div style="border-top: 1px solid #262626; padding-top: 60px;">
        <div style="display: flex;">
          <div style="text-align: left; width: 50%;">
            <div class="footer-container__copyright-text">
              <div v-html="copyrightText" />
            </div>
          </div>
          <div style="text-align: right; width: 50%;">
            Polski
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer-container__copyright-wrapper">
      <div class="footer-container__copyright-section">
        <div class="footer-container__copyright-text">
          <div v-html="copyrightText" />
        </div>
        <div class="footer-container__language-section">
          <div class="footer-container__language-text">
            Polski
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div>
      <div v-for="item in sites" :key="item.id">
        <nuxt-link :to="$i18n.path(item.link)">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <div>
      <nuxt-link
        v-if="$i18n.locale === 'pl'"
        :to="`/de` + $route.fullPath"
        exact
      >
        niemiecki
      </nuxt-link>
      <nuxt-link v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" exact>
        polski
      </nuxt-link>
    </div> -->
  </footer>
</template>

<script>
import LogoComponent from '../components/logo'

export default {
  components: {
    'logo-component': LogoComponent,
  },
  data() {
    return {
      copyrightText: '&copy; 2018 - 2020 Jakub Gania Software',
      sites: [
        {
          titleColumn: 'Strony',
          elements: [
            {
              name: 'Home',
              link: '',
            },
            {
              name: 'O mnie',
              link: 'about',
            },
            {
              name: 'Blog',
              link: 'blog',
            },
            {
              name: 'Doświadczenie',
              link: 'experience',
            },
            {
              name: 'Projekty',
              link: 'projects',
            },
            {
              name: 'Kontakt',
              link: 'contact',
            },
            {
              name: 'Galeria',
              link: 'gallery',
            },
          ],
        },
        {
          titleColumn: 'Posty',
          elements: [
            {
              name: 'Tylko logo a jednak komponent',
              link: 'post/06-12-2019-tylko-logo-a-jednak-komponent',
            },
            {
              name: 'Listopad - podsumowanie',
              link: 'post/03-12-2019-listopad-podsumowanie',
            },
            {
              name: 'ITCorner Tech Meetup #5 Jak zostać dobrym seniorem w IT ?',
              link:
                'post/30-11-2019-itcorner-tech-meetup-5-jak-zostac-dobrym-seniorem-w-it',
            },
            {
              name: 'Nieskończone możliwości eksperymentowania i tworzenia',
              link:
                'post/25-11-2019-nieskonczone-mozliwosci-eksperymentowania-i-tworzenia',
            },
          ],
        },
        {
          titleColumn: 'Projekty',
          elements: [
            {
              name: 'jakubgania.io',
              href: 'https://github.com/jakubgania/jakubgania.io',
            },
            {
              name: 'yourcity-frontend',
              href: 'https://github.com/jakubgania/yourcity-frontend',
            },
            {
              name: 'angular8-omdbapi-movie-search-engine',
              href:
                'https://github.com/jakubgania/angular8-omdbapi-movie-search-engine',
            },
            {
              name: 'business-page-project-2',
              href: 'https://github.com/jakubgania/business-page-project-2',
            },
          ],
        },
        {
          titleColumn: 'Social',
          elements: [
            {
              name: 'GitHub',
              href: 'https://github.com/jakubgania',
            },
            {
              name: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jakubgania',
            },
            {
              name: 'Twitter',
              href: 'https://twitter.com/jakubgania',
            },
            {
              name: 'Youtube',
              href: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #fafbfc;
  padding-top: 3vw;
  padding-bottom: 3vw;
  &--dark-theme {
    background-color: #101214;
  }
  &__logo-section {
    width: 30%;
  }
  &__x {
    padding-left: 20px;
    width: 70%;
  }
  &__sitemap-section {
    // max-width: 1200px;
    width: 100%;
    margin: auto;
    display: flex;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 10vw;
    padding-right: 10vw;
  }
  &__sites-section {
    display: flex;
    width: 100%;
  }
  &__site-column-section {
    width: 25%;
    padding-left: 10px;
  }
  &__site-column-title {
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #4d4d4d;
    font-size: 20px;
  }
  &__site-column-link {
    color: #8a929c;
    font-size: 12px;
    font-weight: 500;
    &:hover {
      color: #000;
      transition: color 0.2s ease;
    }
    &--dark-theme {
      &:hover {
        color: #b3b3b3;
      }
    }
  }
  &__other-elements {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  }
  &__github-button-section {
    width: 50%;
    text-align: right;
    margin-top: 18px;
    order: 2;
  }
  &__dark-theme-switch-section {
    width: 50%;
    order: 1;
  }
  &__bottom-section {
    // border-top: 1px solid #e6e6e6;
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    margin: auto;
  }
  &__copyright-wrapper {
    // border-top: 1px solid #e6e6e6;
  }
  &__copyright-section {
    // max-width: 1200px;
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    margin: auto;
  }
  &__copyright-text {
    text-align: left;
    // padding-top: 24px;
    // padding-bottom: 24px;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 12px;
  }
}
.list-li {
  font-size: 12px;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
}
@media only screen and (max-width: 1264px) {
  .footer-container {
    &__sitemap-section {
      // padding-left: 20px;
      // padding-right: 20px;
    }
    &__copyright-section {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
@media only screen and (max-width: 960px) {
  .footer-container {
    &__logo-section {
      width: 100%;
    }
    &__x {
      width: 100%;
      padding-left: 0;
    }
    &__sitemap-section {
      display: block;
      // padding-left: 20px;
      // padding-right: 20px;
    }
    &__site-column-section {
      padding-left: 0;
      padding-right: 10px;
    }
    &__copyright-section {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .footer-container {
    &__logo-section {
      width: 100%;
    }
    &__x {
      width: 100%;
      padding-left: 0;
    }
    &__sitemap-section {
      display: block;
      padding-left: 14px;
      padding-right: 14px;
    }
    &__sites-section {
      flex-wrap: wrap;
    }
    &__site-column-section {
      padding-left: 0;
      width: 50%;
    }
    &__site-column-title {
      font-size: 14px;
    }
    &__other-elements {
      display: inline-block;
    }
    &__copyright-section {
      padding-left: 14px;
      padding-right: 14px;
    }
    &__copyright-text {
      letter-spacing: 1px;
    }
    &__github-button-section {
      width: 100%;
      text-align: left;
      margin-top: 18px;
    }
    &__dark-theme-switch-section {
      width: 100%;
    }
    &__bottom-section {
      padding-left: 14px;
      padding-right: 14px;
    }
  }
}
</style>
