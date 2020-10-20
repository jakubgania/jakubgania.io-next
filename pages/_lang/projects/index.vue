<template>
  <div class="main-projects-container">
    <top-image-component />
    <div class="change-button-sect">
      <div class="button-sect">
        <div @click="changeView('grid')" class="fgt">
          widok kafelków
        </div>
      </div>
      <div class="button-sect">
        <div @click="changeView('list')" class="fgt">
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
            <!-- $i18n.path(project.slug) -->
            <!-- :to="{ name: 'projects-slug', params: { slug: project.slug } }" -->
            <!-- :to="$i18n.path('projects/' + project.slug)" -->
            <!-- "localePath({ name: 'category-slug', params: { slug: category.slug } })" -->
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
    <div
      v-if="view == 'grid' && data"
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
              <tag-component :key="item.id" :name="item" />
            </template>
          </div>
          <!-- <img
            :src="data.viewer.avatarUrl"
            alt="My Avatar"
            class="w-24 -mt-16 rounded-full shadow-xl"
          /> -->
          <h2 class="text-xl font-bold">
            Jakub Gania
          </h2>
          <div class="flex flex-col flex-grow px-2 mt-4">
            <!-- <div v-if="data.viewer.location" class="flex text-gray-70">
              <div class="flex text-gray-70">
                <span role="img" aria-label="Graduate Emoji">
                  🗺️
                </span>
                <span class="ml-2">
                  {{ data.viewer.location }}
                </span>
              </div>
            </div> -->
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
                    <!-- {{ data.viewer.bio }} -->
                  </span>
                </p>
                <p class="text-xs tracking-wide">
                  I usually put all the projects I create on my Github profile.
                  Sometimes they are larger applications and sometimes small
                  test programs.
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
                  Currently, I have the most projects in JavaScript, but I also
                  use popular libraries and frameworks. I learn Vue, React,
                  Vuetify, Nuxt or Node all the time.
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
      <featured-repos-component :data="data" />
      <recent-repos-component :data="data" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TopImage from '@/components/projects/TopImage'
import TagComponent from '@/components/projects/Tag'
import FeaturedRepos from '@/components/projects/FeaturedRepos'
import RecentRepos from '@/components/projects/RecentRepos'

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
  components: {
    'top-image-component': TopImage,
    'tag-component': TagComponent,
    'featured-repos-component': FeaturedRepos,
    'recent-repos-component': RecentRepos,
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
      data: null,
      viewer: {},
    }
  },
  methods: {
    changeView(viewType) {
      this.view = viewType
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
  mounted() {
    this.$apollo
      .query({
        query: githubDataQuery,
      })
      .then(({ data }) => {
        // this.data = JSON.parse(JSON.stringify(data))
        this.data = data
        // this.viewer = JSON.parse(JSON.stringify(data.viewer))
        console.log('this data ', this.data)
        // console.log('this viewer ', this.viewer.pinnedItems)
        // this.followers = data.viewer.followers.totalCount
        // this.following = data.viewer.following.totalCount
        // this.starredRepositories = data.viewer.starredRepositories.totalCount
      })

    // const featuredRepoList = []

    // if (this.viewer) {
    //   this.viewer.pinnedItems.edges
    //     .map((n) => n.node)
    //     .concat()
    //     .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1))
    //     .forEach((r) => featuredRepoList.push(r))
    // }

    // console.log('static ', this.data)

    // const { data } = $apolloProvider.defaultClient.query({
    //   query: githubDataQuery,
    // })

    // this.data = data

    // console.log('static format', JSON.parse(JSON.stringify(data.viewer)))
  },
  head() {
    return {
      title: 'Jakub Gania Software | Projekty',
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
