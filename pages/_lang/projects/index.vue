<template>
  <div>
    <div class="content-container-next">
      <div class="top-image-container">
        <div class="top-image-container__section">
          <div class="top-image-container__content-section">
            <div class="top-image-container__title">
              [ projekty ]
            </div>
          </div>
          <div class="top-image-container__scroll-down-container">
            <a
              href="#list-projects"
              class="top-image-container__scroll-down-anchor"
            >
              <div class="top-image-container__cheveron" />
              <div class="top-image-container__cheveron" />
              <div class="top-image-container__cheveron" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="list-projects-container">
      <!-- breadcrumb -->
      <!-- subpage title section component -->
      <div class="grid grid-rows-1">
        Opis moich projektów programistycznych
      </div>
      <div>
        {{ viewer.login }}
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
  </div>
</template>

<script>
import gql from 'graphql-tag'

const testF = gql`
  query viewer {
    viewer {
      login
    }
  }
`

export default {
  async asyncData({ $content, params, store }) {
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
      test: '',
      loading: 0,
    }
  },
  apollo: {
    viewer: {
      loadingKey: 'loading',
      query: testF,
    },
    // test: {
    // },
    // update: (data) => data.test,
  },
  mounted() {
    console.log('result ', this.viewer)
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
.top-image-container {
  position: relative;
  margin-bottom: 40px;

  $top-image-width: 100%;
  $top-image-height: 100vh;

  &__section {
    width: $top-image-width;
    height: $top-image-height;
    background-color: #000;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(../../../assets/images/stickers.jpg);
      background-position: center;
      background-size: cover;
      width: $top-image-width;
      height: 100vh;
      opacity: 0.5;
      background-attachment: fixed;
    }
  }

  &__title {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 10vw;
    font-weight: 900;
    letter-spacing: 8px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &__content-section {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &__scroll-down-container {
    position: absolute;
    left: 50%;
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
      background: #fff;
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
