<template>
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
      <more-content-button-component
        :text="'Więcej projektów'"
        :link="'projects'"
      />
    </div>
  </div>
</template>

<script>
import MoreContentButtonComponent from '../../components/more-content-button'

export default {
  comments: {
    'more-content-button-component': MoreContentButtonComponent,
  },
}
</script>

<style lang="scss" scoped>
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
  color: var(--home-page-projects-section-color);
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
  color: var(--home-page-projects-section-color);
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

@media only screen and (max-width: 600px) {
  .projects-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .projects-sections-container {
    flex-wrap: wrap;
  }
  .projects-section-title h2 {
    font-size: 36px;
  }
  .projects-item {
    width: 100%;
  }
  .projects-item:nth-child(2) ul {
    margin-top: inherit;
  }
}
</style>
