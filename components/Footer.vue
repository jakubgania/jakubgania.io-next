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
          <div class="footer-container__github-button-section">
            <a
              href="https://github.com/jakubgania?tab=followers"
              target="_blank"
              rel="noopener noreferrer"
              class="git-ref-link"
            >
              <icon-component
                :path="mdiChevronRight"
                :size="12"
                :color="'#8a929c'"
              />
              {{ followers }} followers
            </a>
            <span class="git-ref" style="margin-left: 4px; margin-right: 4px;">
              |
            </span>
            <a
              href="https://github.com/jakubgania?tab=following"
              target="_blank"
              rel="noopener noreferrer"
              class="git-ref-link"
            >
              <icon-component
                :path="mdiChevronRight"
                :size="12"
                :color="'#8a929c'"
              />
              {{ following }} following
            </a>
            <span class="git-ref" style="margin-left: 4px; margin-right: 4px;">
              |
            </span>
            <a
              href="https://github.com/jakubgania?tab=stars"
              target="_blank"
              rel="noopener noreferrer"
              class="git-ref-link"
            >
              <icon-component
                :path="mdiChevronRight"
                :size="12"
                :color="'#8a929c'"
              />
              {{ starredRepositories }} stars
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container__bottom-section">
      <div class="footer-container__line">
        <div class="footer-container__sect">
          <div class="footer-container__sect-theme">
            <select
              v-model="$colorMode.preference"
              class="select-options"
              style="margin-right: 12px;"
            >
              <option
                v-for="option in themes"
                :key="option.value"
                :value="option.value"
                :selected="option.value == $colorMode.preference"
              >
                {{ option.name }}
              </option>
            </select>
            <select class="select-options" @change="changeLanguage">
              <option
                v-for="option in langs"
                :key="option.value"
                :value="option.value"
                :selected="option.value == $i18n.locale"
              >
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="footer-container__sect-copy">
            <div class="footer-container__copyright-text">
              <div v-html="copyrightText" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mdiChevronRight, mdiTranslate, mdiBrightness6 } from '@mdi/js'
import gql from 'graphql-tag'
import LogoComponent from '../components/Logo'
import IconComponent from '../components/Icon'

const githubDataQuery = gql`
  query viewer {
    viewer {
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`

export default {
  components: {
    'logo-component': LogoComponent,
    'icon-component': IconComponent,
  },
  apollo: {
    viewer: {
      loadingKey: 'loading',
      query: githubDataQuery,
    },
  },
  data() {
    return {
      githubDataQuery,
      mdiChevronRight,
      mdiTranslate,
      mdiBrightness6,
      githubData: null,
      viewer: [],
      followers: null,
      following: null,
      starredRepositories: null,
      themes: [
        {
          name: 'Light',
          value: 'light',
        },
        {
          name: 'Dark',
          value: 'dark',
        },
      ],
      langs: [
        {
          name: 'Polish',
          value: 'pl',
        },
        {
          name: 'Germany',
          value: 'de',
        },
      ],
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
  mounted() {
    this.getQuery()
    this.$nuxt.$colorMode.preference = 'light'
  },
  methods: {
    changeLanguage(e) {
      let route = ''

      if (this.$route.name === 'index') {
        this.routerPush('lang', e.target.value)
      } else {
        if (e.target.value === 'de') {
          route = `lang-${this.$route.name}`
        } else {
          route = this.$route.name
        }

        this.routerPush(route, e.target.value)
      }
    },
    routerPush(routeName, languageParam) {
      this.$router.push({
        name: routeName,
        params: {
          lang: languageParam,
        },
      })
    },
    getQuery() {
      this.$apollo
        .query({
          query: githubDataQuery,
        })
        .then(({ data }) => {
          this.githubData = JSON.parse(JSON.stringify(data.viewer))
          this.followers = data.viewer.followers.totalCount
          this.following = data.viewer.following.totalCount
          this.starredRepositories = data.viewer.starredRepositories.totalCount
        })
    },
  },
}
</script>

<style lang="scss">
.light-mode {
  --footer-copyright-color: #000;
  --footer-select-language-color: #000;
  --footer-container-line-color: #e6e6e6;
  --footer-container-link-hover-color: #000;
  --footer-select-background-color: transparent;
  --footer-container-border-color: #fff;
  --footer-background-color: #fafbfc;
}
.dark-mode {
  --footer-copyright-color: #fff;
  --footer-select-language-color: #fff;
  --footer-container-line-color: #262626;
  --footer-container-link-hover-color: #d9d9d9;
  --footer-select-background-color: #000;
  --footer-container-border-color: #262626;
  --footer-background-color: #000;
}
</style>

<style lang="scss" scoped>
.footer-container {
  background-color: var(--footer-background-color);
  padding-top: 3vw;
  padding-bottom: 3vw;
  border-top: 1px solid var(--footer-container-border-color);
  &__logo-section {
    width: 30%;
  }
  &__x {
    padding-left: 20px;
    width: 70%;
  }
  &__sitemap-section {
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
      color: var(--footer-container-link-hover-color);
      transition: color 0.2s ease;
    }
  }
  &__other-elements {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
  }
  &__github-button-section {
    width: 100%;
    text-align: left;
    display: flex;
    line-height: 1;
    order: 1;
  }
  &__dark-theme-switch-section {
    width: 50%;
    text-align: right;
    order: 2;
  }
  &__bottom-section {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    margin: auto;
  }
  // &__copyright-wrapper {
  //   border-top: 1px solid #e6e6e6;
  // }
  &__line {
    border-top: 1px solid var(--footer-container-line-color);
    padding-top: 60px;
  }
  &__sect {
    display: flex;
    align-items: baseline;
  }
  &__sect-theme {
    text-align: left;
    width: 50%;
  }
  &__sect-copy {
    text-align: right;
    width: 50%;
  }
  &__copyright-section {
    padding-left: 10vw;
    padding-right: 10vw;
    width: 100%;
    margin: auto;
  }
  &__copyright-text {
    text-align: right;
    color: var(--footer-copyright-color);
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 12px;
    font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  }
}
.list-li {
  font-size: 12px;
  letter-spacing: 0.6px;
  margin-bottom: 10px;
}
.select-options {
  background: var(--footer-select-background-color);
  outline: none;
  font-size: 12px;
  letter-spacing: 2px;
  color: var(--footer-select-language-color);
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
}
.git-ref-link {
  color: #8a929c;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.6px;
  display: flex;
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
.git-ref {
  color: #8a929c;
  font-size: 12px;
  font-weight: 500;
}
@media only screen and (max-width: 1264px) {
  .footer-container {
    &__logo-section {
      width: 100%;
      padding-left: 10px;
    }
    &__x {
      width: 100%;
      padding-left: 0;
    }
    &__sitemap-section {
      display: block;
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
      padding-left: 0;
    }
    &__x {
      width: 100%;
      padding-left: 0;
    }
    &__sitemap-section {
      display: block;
    }
    &__sites-section {
      flex-wrap: wrap;
    }
    &__site-column-title {
      font-size: 18px;
    }
    &__site-column-section {
      display: block;
      padding-left: 0;
      padding-right: 10px;
      width: 50%;
    }
    &__copyright-section {
      padding-left: 20px;
      padding-right: 20px;
    }
    &__line {
      padding-top: 50px;
    }
  }
}
@media only screen and (max-width: 800px) {
  .footer-container {
    &__site-column-title {
      font-size: 16px;
    }
    &__line {
      padding-top: 40px;
    }
    &__sect {
      display: block;
    }
    &__sect-theme {
      text-align: left;
      width: 100%;
      padding-bottom: 30px;
    }
    &__sect-copy {
      text-align: left;
      width: 100%;
      padding-bottom: 30px;
    }
    &__copyright-text {
      text-align: left;
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
      width: 100%;
    }
    &__site-column-title {
      font-size: 14px;
      font-weight: 600;
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