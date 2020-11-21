<template>
  <div class="main-projects-container">
    <TopImageComponent />
    <template>
      <div class="change-button-sect">
        <div class="button-sect">
          <div class="fgt" @click="changeView('github')">
            widok kafelków
          </div>
        </div>
        <div class="button-sect">
          <div class="fgt" @click="changeView('list')">
            widok listy
          </div>
        </div>
      </div>
      <div v-show="view == 'list'" class="list-projects-container">
        <!-- breadcrumb -->
        <!-- subpage title section component -->
        <div class="grid grid-rows-1">
          Opis moich projektów programistycznych
        </div>
        <div class="grid grid-rows-1">
          <ul>
            <li
              v-for="project of projects"
              :key="project.slug"
              class="post-link-item"
            >
              <nuxt-link
                :to="$i18n.path('projects/' + project.slug)"
                class="post-link"
              >
                <div class="post-main-title">
                  <div class="post-title">
                    {{ project.title }}
                  </div>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <template v-if="!data">
        <div class="loader">Loading...</div>
      </template>
      <div
        v-if="view == 'github' && data"
        class="max-w-xs py-8 mx-auto md:max-w-sm lg:max-w-5xl"
      >
        <div
          class="flex flex-col item-center py-4 lg:gap-2 lg:grid lg:grid-cols-3"
        >
          <div
            class="flex flex-col items-center h-full gap-4 overflow-hidden text-sm bg-gray-10"
          >
            <div class="flex flex-wrap justify-center p-4 pb-16 bg-gray-20">
              <template v-for="item in techTags">
                <TagComponent :key="item.id" :name="item" />
              </template>
            </div>
            <img
              :src="data.viewer.avatarUrl"
              alt="My Avatar"
              class="w-24 -mt-16 rounded-full shadow-xl"
            />
            <h2 class="text-xl font-bold">
              Jakub Gania
            </h2>
            <div class="flex flex-col flex-grow px-2 mt-4">
              <div v-if="data.viewer.location" class="flex text-gray-70">
                <div class="flex text-gray-70">
                  <span role="img" aria-label="Graduate Emoji">
                    🗺️
                  </span>
                  <span class="ml-2">
                    {{ data.viewer.location }}
                  </span>
                </div>
              </div>
            </div>
            <div
              class="grid w-full grid-cols-3 mt-4 text-xs font-bold uppercase gap-px"
            >
              <a
                href="https://github.com/jakubgania"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
              >
                <span class="ml-1 text-white">
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/jakubgania"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
              >
                <span class="ml-1 text-white">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
              >
                <span class="ml-1 text-white">
                  YouTube
                </span>
              </a>
            </div>
          </div>
          <div class="flex flex-col h-full col-span-2 gap-4 mt-4 lg:mt-0">
            <div class="flex flex-col gap-2">
              <h2 class="text-xl font-bold">
                Bio
              </h2>
              <div class="flex flex-col h-full gap-4 p-4 bg-gray-10 lg:mt-0">
                <div class="grid grid-flow-row gap-4">
                  <p>
                    <span>
                      {{ data.viewer.bio }}
                    </span>
                  </p>
                  <p class="text-xs tracking-wide">
                    I usually put all the projects I create on my Github
                    profile. Sometimes they are larger applications and
                    sometimes small test programs.
                  </p>
                  <p class="text-xs tracking-wide">
                    I learn different technologies and try to use the acquired
                    knowledge in code.
                  </p>
                  <p class="text-xs tracking-wide">
                    In addition to programming fullstack applications, I also
                    create larger or smaller scripts in Bash, Python and
                    JavaScript.
                  </p>
                  <p class="text-xs tracking-wide">
                    Currently, I have the most projects in JavaScript, but I
                    also use popular libraries and frameworks. I learn Vue,
                    React, Vuetify, Nuxt or Node all the time.
                  </p>
                  <p class="text-xs tracking-wide">
                    Many projects are not very extensive or finished. I will
                    highlight the most interesting and extensive ones on this
                    page.
                  </p>
                  <p class="text-sm">
                    It is amazing how many possibilities are offered by modern
                    technologies!
                  </p>
                  <p>
                    <span role="img" aria-label="inbox emoji" class="mr-1">
                      📥️
                    </span>
                    DMs are open on
                    <a
                      class="transition-colors duration-200 text-blue-50 hover:text-blue-40"
                      href="https://linkedin.com/in/"
                    >
                      LinkedIn
                    </a>
                    and
                    <a
                      class="transition-colors duration-200 text-blue-50 hover:text-blue-40"
                      href="https://twitter.com/"
                    >
                      Twitter
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedReposComponent :data="data" />
        <RecentReposComponent :data="data" />
      </div>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TopImageComponent from '@/components/projects/TopImage'
import TagComponent from '@/components/projects/Tag'
import FeaturedReposComponent from '@/components/projects/FeaturedRepos'
import RecentReposComponent from '@/components/projects/RecentRepos'

const githubDataQuery = gql`
  query viewer {
    viewer {
      name
      id
      updatedAt
      bio
      avatarUrl
      location
      url
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              name
              description
              homepageUrl
              pushedAt
              url
              openGraphImageUrl
              usesCustomOpenGraphImage
              refs(refPrefix: "refs/heads/", last: 3) {
                nodes {
                  name
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                      messageHeadline
                      pushedDate
                    }
                  }
                }
              }
              repositoryTopics(first: 50) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      repositories(
        orderBy: { field: PUSHED_AT, direction: ASC }
        last: 3
        privacy: PUBLIC
        isFork: false
      ) {
        edges {
          node {
            ... on Repository {
              name
              description
              homepageUrl
              pushedAt
              url
              openGraphImageUrl
              usesCustomOpenGraphImage
              refs(refPrefix: "refs/heads/", last: 3) {
                nodes {
                  name
                  target {
                    ... on Commit {
                      history {
                        totalCount
                      }
                      messageHeadline
                      pushedDate
                    }
                  }
                }
              }
              languages(first: 5) {
                edges {
                  node {
                    name
                    color
                  }
                }
              }
              repositoryTopics(first: 5) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
              pullRequests(first: 5) {
                totalCount
              }
            }
          }
        }
      }
    }
    rateLimit {
      limit
      cost
      remaining
      resetAt
    }
  }
`

export default {
  components: {
    TopImageComponent,
    TagComponent,
    FeaturedReposComponent,
    RecentReposComponent,
  },
  async asyncData({ app, $content, params, store }) {
    let language = store.state.locale

    if (params.lang === 'de') {
      language = 'de'
    }

    const projects = await $content('projects/' + language, params.slug)
      .only(['title', 'description', 'slug'])
      .fetch()

    return {
      projects,
    }
  },
  data() {
    return {
      githubDataQuery,
      loading: 0,
      view: 'grid',
      error: null,
      techTags: [
        'JavaScript',
        'TypeScript',
        'React',
        'GraphQL',
        'PWA',
        'Express',
        'Nodejs',
        'SQL',
        'Cloud',
      ],
      data: false,
      flag: false,
      viewer: {},
    }
  },
  mounted() {
    // this.$apollo
    //   .query({
    //     query: githubDataQuery,
    //   })
    //   .then(({ data }) => {
    //     this.data = data
    //   })
    if (this.view === 'github') {
      this.getApolloData()
      this.flag = true
    }

    // if (localStorage.getItem('projectsList')) {
    //   this.view = JSON.parse(localStorage.getItem('projectsList'))
    // } else {
    //   localStorage.setItem('projectsList', JSON.stringify('grid'))
    // }
  },
  created() {
    if (this.$route.query.view === 'github') {
      this.view = 'github'
    }

    if (this.$route.query.view === 'list') {
      this.view = 'list'
    }

    if (this.view !== 'github' && this.view !== 'list') {
      this.view = 'github'
    }
  },
  methods: {
    changeView(viewType) {
      this.view = viewType
      console.log('viewer ', this.viewer)
      // localStorage.setItem('projectsList', JSON.stringify(viewType))
      if (this.flag === false) {
        this.getApolloData()
      }

      window.history.replaceState(
        {},
        '',
        '/' + this.$store.state.locale + '/projects?view=' + this.view
      )
    },
    getApolloData() {
      this.$apollo
        .query({
          query: githubDataQuery,
        })
        .then(({ data }) => {
          this.data = data
        })
    },
  },
  // apollo: {
  //   viewer: {
  //     loadingKey: 'loading',
  //     query: githubDataQuery,
  //     error(error) {
  //       this.error = JSON.stringify(error.message)
  //       console.log('graphql error message ', error.message)
  //     },
  //   },
  // },
  head() {
    return {
      title: 'Jakub Gania Software | Projekty',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projekty',
        },
        {
          name: 'keywords',
          content: 'projekty',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Projekty | Jakub Gania Software',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Jakub Gania Software',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/projects',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Opis moich projektów',
        },
        {
          hid: 'og:image',
          proprty: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.loader,
.loader::before,
.loader::after {
  background: #000;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #000;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader::before,
.loader::after {
  position: absolute;
  top: 0;
  content: '';
}
.loader::before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader::after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

.main-projects-container {
  margin-bottom: 140px;
}
.content-container {
  width: 100%;
  margin: 0;
}
.list-projects-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
  position: relative;
}
.categories-section {
  width: 100%;
  display: flex;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-top: 40px;
  margin-bottom: 40px;

  &__item {
    width: 33.33%;
    border-right: 1px solid gray;
    cursor: default;
    margin-bottom: -0.2px;

    &--text {
      font-size: 12px;
      letter-spacing: 1px;
      text-align: center;
      padding-top: 14px;
      padding-bottom: 14px;
    }

    &:last-child {
      border-right: none;
    }

    &:hover {
      background-color: #f96;
      transition: background-color 0.2s ease;
    }
  }
}
.list-projects {
  padding: 0;

  &__title {
    color: #000;
    font-size: 14px;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-bottom: 10px;

    &--dark-theme {
      color: #bfbfbf;
    }

    &:hover {
      color: #06f;
    }
  }

  &__link {
    text-decoration: none;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  &:hover {
    background-color: #f2f2f2;
    padding-left: 12px;
    transition: padding-left 0.2s ease;
  }
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
  // font-size: 14px;

  &:hover {
    .post-main-title {
      color: #06f;
    }
  }
}
.post-title {
  font-size: 16px;
}
.change-button-sect {
  max-width: 600px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 60px;
}
.button-sect {
  min-width: 240px;
  margin: 10px;
}
.fgt {
  cursor: default;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.5rem 3rem;
  color: var(--more-content-button-text-color);
  font-size: 12px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #6a82fb, #fc5c7d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px var(--more-content-button-background-color) inset;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid transparent;
    letter-spacing: 2.8px;
    background-image: none;
    transition: all 0.2s ease;
  }
}

@media only screen and (max-width: 960px) {
  .list-projects-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .list-projects-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .change-button-sect {
    display: block;
  }
  .post-link {
    font-size: 14px;
  }
}
</style>
