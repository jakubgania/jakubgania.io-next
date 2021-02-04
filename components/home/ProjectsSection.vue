<template>
  <div class="projects-section">
    <div class="projects-section-wrapper">
      <div class="projects-section-title">
        <h2>
          {{ $t('home.projectsSection.title') }}
        </h2>
      </div>
      <div class="description-section">
        <p class="description">
          {{ description }}
        </p>
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
      <div class="buttons-section">
        <div class="buttons-section__item">
          <MoreContentButtonComponent
            :text="$t('home.projectsSection.otherProjects')"
            :link="'projects'"
          />
        </div>
        <div class="buttons-section__item">
          <MoreContentButtonComponent
            :text="$t('home.projectsSection.allProjects')"
            :link="'projects?view=list'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreContentButtonComponent from '../../components/MoreContentButton'

export default {
  components: {
    MoreContentButtonComponent,
  },
  data() {
    return {
      description:
        'Tworzę różnej wielkości projekty. Są to bardziej zaawansowane aplikacje ale również prostsze statyczne strony. Programuję frontend jak i backend. Eksperymentuję z różnymi technologiami.',
    }
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
  text-align: left;
  color: var(--home-page-projects-section-color);
}
.description-section {
  margin-top: 60px;
  width: 100%;
}
.description {
  max-width: 45%;
  letter-spacing: 1px;
  font-weight: 500;
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
.project-list li {
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & :hover {
    color: #06f;
  }
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
  font-size: 20px;
}
.buttons-section {
  display: flex;

  &__item {
    width: 50%;
  }
}

@media only screen and (max-width: 1400px) {
  .description {
    max-width: 50%;
  }
}

@media only screen and (max-width: 960px) {
  .description {
    max-width: 60%;
  }
}

@media only screen and (max-width: 800px) {
  .description {
    max-width: 70%;
  }
  .projects-sections-container {
    flex-wrap: wrap;
  }
  .projects-item {
    width: 100%;
  }
  .projects-item:nth-child(2) ul {
    margin-top: inherit;
  }
}

@media only screen and (max-width: 700px) {
  .buttons-section {
    display: block;

    &__item {
      width: 100%;
    }
  }
}

@media only screen and (max-width: 600px) {
  .projects-section {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .projects-section-title h2 {
    font-size: 36px;
  }
  .description {
    max-width: 100%;
  }
}
</style>
