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
            <IconComponent
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
            <IconComponent
              :path="linkedin"
              :size="37"
              :color="'#0077b5'"
              :var="false"
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
            <IconComponent
              :path="mdiTwitter"
              :size="44"
              :color="'#55acee'"
              :var="false"
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
            <IconComponent
              :path="mdiYoutube"
              :size="44"
              :color="'#cd201f'"
              :var="false"
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
import { mdiGithub, mdiTwitter, mdiYoutube } from '@mdi/js'
import IconComponent from '../../components/Icon'

export default {
  components: {
    IconComponent,
  },
  data() {
    return {
      mdiGithub,
      mdiTwitter,
      mdiYoutube,
      linkedin:
        'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
      links: {
        github: 'https://github.com/jakubgania',
        linkedin: 'https://pl.linkedin.com/in/jakubgania',
        twitter: 'https://twitter.com/jakubgania',
        youtube: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
      },
    }
  },
  mounted() {
    console.log('icon ', mdiGithub)
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
    margin-left: 60px;
    margin-right: 60px;
  }
  .social-icon-item {
    max-width: 50%;
    width: 100%;
    display: flex;
    padding: 40px;
  }
}

@media only screen and (max-width: 600px) {
  .social-section-container {
    margin-left: 20px;
    margin-right: 20px;
  }
  .section-content-wrapper {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .social-section-title {
    margin-bottom: 40px;
  }
  .social-section-title h2 {
    font-size: 36px;
  }
  .social-section {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .social-icon-item {
    padding: 10px;
  }
}
</style>
