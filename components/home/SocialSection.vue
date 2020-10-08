<template>
  <div class="social-section">
    <div class="social-section-wrapper">
      <div class="social-section-title">
        <h2>
          Social
        </h2>
      </div>
      <div class="social-section-container">
        <div class="social-icon-item">
          <a
            :href="links.github"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex;"
          >
            <icon-component
              :path="mdiGithub"
              :size="44"
              :color="'--home-page-social-icons-section-color'"
              :var="true"
            />
            <span class="social-icon-describe">
              Github
            </span>
          </a>
        </div>
        <div class="social-icon-item">
          <a
            :href="links.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex;"
          >
            <icon-component
              :path="mdiLinkedin"
              :size="44"
              :color="'--home-page-social-icons-section-color'"
              :var="true"
            />
            <span class="social-icon-describe">
              LinkedIn
            </span>
          </a>
        </div>
        <div class="social-icon-item">
          <a
            :href="links.twitter"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex;"
          >
            <icon-component
              :path="mdiTwitter"
              :size="44"
              :color="'--home-page-social-icons-section-color'"
              :var="true"
            />
            <span class="social-icon-describe">
              Twitter
            </span>
          </a>
        </div>
        <div class="social-icon-item">
          <a
            :href="links.youtube"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex;"
          >
            <icon-component
              :path="mdiYoutube"
              :size="44"
              :color="'--home-page-social-icons-section-color'"
              :var="true"
            />
            <span class="social-icon-describe">
              YouTube
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiYoutube } from '@mdi/js'
import IconComponent from '../../components/icon'

export default {
  components: {
    'icon-component': IconComponent,
  },
  data() {
    return {
      mdiGithub,
      mdiLinkedin,
      mdiTwitter,
      mdiYoutube,
      links: {
        github: 'https://github.com/jakubgania',
        linkedin: 'https://pl.linkedin.com/in/jakubgania',
        twitter: 'https://twitter.com/jakubgania',
        youtube: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
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
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s ease;
  }
}
.social-icon-describe {
  font-size: 10px;
  margin-left: 20px;
  letter-spacing: 6px;
  font-weight: 900;
  color: var(--home-page-social-icons-section-color);
}
.social-section-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 80px;
  color: var(--home-page-social-icons-section-color);
}

@media only screen and (max-width: 1200px) {
  .social-section-container {
    display: flex;
    flex-wrap: wrap;
  }
  .social-icon-item {
    max-width: 50%;
    width: 100%;
    display: flex;
    padding: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .section-content-wrapper {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .social-section-title {
    margin-bottom: 40px;
  }
  .social-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .social-icon-item {
    padding: 30px;
  }
}
</style>
