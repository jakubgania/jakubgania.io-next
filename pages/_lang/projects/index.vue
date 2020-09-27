<template>
  <div>
    <top-image-component />
    <div class="max-w-xs py-8 mx-auto md:max-w-sm lg:max-w-5xl">
      <div
        class="flex flex-col item-center py-4 lg:gap-8 lg:grid lg:grid-cols-3"
      >
        <div
          class="flex flex-col items-center h-full gap-4 overflow-hidden text-sm rounded-md bg-gray-90"
        >
          <div class="flex flex-wrap justify-center p-4 pb-16 bg-gray-80">
            <template v-for="item in techTags">
              <tag-component :key="item.id" :name="item" />
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
            <div v-if="data.viewer.location" class="flex text-gray-30">
              <div class="flex text-gray-30">
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
              href="https://purepc.pl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
            >
              <span class="ml-1">GitHub</span>
            </a>
            <a
              href="https://purepc.pl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
            >
              <span class="ml-1">LinkedIn</span>
            </a>
            <a
              href="https://purepc.pl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center p-1 font-bold tracking-wide uppercase transition duration-200 border-2 border-transparent bg-gray-70 hover:bg-gray-60 hover:text-white focus:outline-none focus:border-gray-10"
            >
              <span class="ml-1">YouTube</span>
            </a>
          </div>
        </div>
        <div class="flex flex-col h-full col-span-2 gap-4 mt-4 lg:mt-0">
          <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold">
              Bio
            </h2>
            <div
              class="flex flex-col h-full gap-4 p-4 rounded-md bg-gray-90 lg:mt-0"
            >
              <div class="grid grid-flow-row gap-4">
                <p>
                  <span>
                    {{ data.viewer.bio }}
                  </span>
                </p>
                <p>
                  more text example text more text
                </p>
                <p>
                  more text example text more text
                </p>
                <p class="text-lg font-bold">
                  example text example text
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
    </div>
    <!-- <div class="list-projects-container">
      <div class="grid grid-rows-1">
        Opis moich projektów programistycznych
      </div>
      <div>
        {{ data.viewer.name }}
      </div>
      <div>
        {{ data.viewer.bio }}
      </div>
      <div>
        {{ data.viewer.location }}
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
    </div> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TopImage from '@/components/projects/TopImage'
import TagComponent from '@/components/projects/Tag'
import FeaturedRepos from '@/components/projects/FeaturedRepos'

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
      pinnedItems(first: 3) {
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
              repositoryTopics(first: 100) {
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

    const { data } = await app.apolloProvider.defaultClient.query({
      query: githubDataQuery,
    })

    console.log('static ', data)
    console.log('static format', JSON.parse(JSON.stringify(data.viewer)))

    return {
      projects,
      data,
    }
  },
  components: {
    'top-image-component': TopImage,
    'tag-component': TagComponent,
    'featured-repos-component': FeaturedRepos,
  },
  data() {
    return {
      githubDataQuery,
      loading: 0,
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
    }
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
    console.log('result ', this.viewer)
    console.log('githubData ', this.githubData)
    const featuredRepoList = []

    if (this.viewer) {
      this.viewer.pinnedItems.edges
        .map((n) => n.node)
        .concat()
        .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1))
        .forEach((r) => featuredRepoList.push(r))

      console.log('dddff ', featuredRepoList)
    }
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

<style lang="scss">
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

  &:hover {
    .post-main-title {
      color: #06f;
    }
  }
}
.post-title {
  font-size: 20px;
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
}
</style>
