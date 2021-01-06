<template>
  <div class="section-content-wrapper">
    <div class="section-content">
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            {{ $t('home.contentSection[0].title.part1') }} <br />
            {{ $t('home.contentSection[0].title.part2') }}
          </h2>
        </div>
        <div class="section-content-row__icons-section">
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiReact"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiVuejs"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiLanguageJavascript"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiLanguageHtml5"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
        </div>
        <div class="section-content-row__description">
          {{ $t('home.contentSection[0].description') }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            {{ $t('home.contentSection[1].title.part1') }} <br />
            {{ $t('home.contentSection[1].title.part2') }}
          </h2>
        </div>
        <div class="section-content-row__icons-section">
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiCloudTags"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiGoogleCloud"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiMicrosoftAzure"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiAws"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
        </div>
        <div class="section-content-row__description">
          {{ $t('home.contentSection[1].description') }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            {{ $t('home.contentSection[2].title.part1') }} <br />
            {{ $t('home.contentSection[2].title.part2') }}
          </h2>
        </div>
        <div class="section-content-row__icons-section">
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiCodeBraces"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiDocker"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiWebpack"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiBash"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
        </div>
        <div class="section-content-row__description">
          {{ $t('home.contentSection[2].description') }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            {{ $t('home.contentSection[3].title.part1') }} <br />
            {{ $t('home.contentSection[3].title.part2') }}
          </h2>
        </div>
        <div class="section-content-row__icons-section">
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiServer"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiConsoleLine"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiSourceBranch"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
          <div class="section-content-row__icon-item">
            <IconComponent
              :path="mdiMicrosoftVisualStudioCode"
              :size="iconSize"
              :color="'--component-content-section-description-color'"
              :var="true"
            />
          </div>
        </div>
        <div class="section-content-row__description">
          {{ $t('home.contentSection[3].description') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiReact,
  mdiVuejs,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiCloudTags,
  mdiGoogleCloud,
  mdiMicrosoftAzure,
  mdiAws,
  mdiBash,
  mdiDocker,
  mdiWebpack,
  mdiServer,
  mdiCodeBraces,
  mdiConsoleLine,
  mdiSourceBranch,
  mdiMicrosoftVisualStudioCode,
} from '@mdi/js'
import IconComponent from '../../components/Icon'

export default {
  components: {
    IconComponent,
  },
  data() {
    return {
      mdiReact,
      mdiVuejs,
      mdiLanguageJavascript,
      mdiLanguageHtml5,
      mdiCloudTags,
      mdiGoogleCloud,
      mdiMicrosoftAzure,
      mdiAws,
      mdiBash,
      mdiDocker,
      mdiWebpack,
      mdiServer,
      mdiCodeBraces,
      mdiConsoleLine,
      mdiSourceBranch,
      mdiMicrosoftVisualStudioCode,
      iconSize: 44,
    }
  },
}
</script>

<style lang="scss" scoped>
.section-content-wrapper {
  margin-top: calc(100vh - 64px);
  background-color: var(--component-content-section-background-color);
  padding-top: 180px;
  padding-bottom: 180px;
}
.section-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1600px;
  margin: auto;
}
.section-content-row {
  max-width: 50%;
  width: 100%;
  padding: 60px;

  &:first-child {
    margin-bottom: 80px;
  }

  &__title {
    margin-bottom: 24px;
    font-weight: 800;
    // display: inline;
    // background-image: linear-gradient(101deg, #fc466b, #3f5efb);
    background-image: linear-gradient(101deg, #001e72, #55d2f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    & h2 br {
      display: none;
    }
  }

  &__description {
    font-size: 14.4px;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 1.6;
    color: var(--component-content-section-description-color);
  }

  &__icons-section {
    display: flex;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  &__icon-item {
    width: 25%;
  }
}

@media only screen and (max-width: 1400px) {
  .section-content-row {
    &__title {
      & h2 br {
        display: block;
      }
    }
  }
}

@media only screen and (max-width: 860px) {
  .section-content-row {
    max-width: 100%;
    widows: 100%;
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 30px;
    padding-bottom: 30px;

    &:first-child {
      margin-bottom: initial;
    }

    &__title {
      line-height: 1;
      padding-bottom: 10px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .section-content-wrapper {
    margin-top: calc(100vh - 48px);
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .section-content-row {
    max-width: 100%;
    widows: 100%;
    padding: 30px;

    &:first-child {
      margin-bottom: initial;
    }

    &__title {
      line-height: 1;
      padding-bottom: 10px;

      & h2 {
        font-size: 34px;
      }
    }
  }
}
</style>
