<template>
  <div class="section-content-wrapper">
    <div class="section-content">
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            Technologie <br />
            Webowe
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
          {{ desc1 }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            Technologie <br />
            Chmurowe
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
          {{ desc2 }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            Software <br />
            Engineering
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
          {{ desc3 }}
        </div>
      </div>
      <div class="section-content-row">
        <div class="section-content-row__title">
          <h2>
            IT i <br />
            Technologie
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
          {{ desc4 }}
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
      desc1:
        'Główne technologie w jaki się specjalizję to technologie z szeroko rozumianego stosu webowego. Są to technologie zarówno frontendowe takie jak React, Vue, Angular, Nuxt oraz backendowe takie jak Node czy Laravel. Tworzę różny skrypty z użyciem Bash czy Python. Większość mojej pracy i eksperymentów umieszczam na platformie Github.',
      desc2:
        'Technologie chmurowe to bardzo ważny aspekt współczesnych systemów informatycznych. Chmura daje możliwości praktycznie nieograniczonego skalowania aplikacji oraz łatej integrcji wielu komponentów. To naprawdę wiele zalet i możliwości oraz inne podejśćie do budowania złożonych struktór. Jest to kierunek w którym rozwijam się od jesieni 2019 roku i coraz bardziej mnie wciąga.',
      desc3:
        'Dziedina jaką jest inżynieria oprogramowania jest złożonym zagadnieniem. Tworzenie aplikacji w różnych technologiach, odmienne koncepcje języków programowania, wysublimowane architektury, bezpieczeńśtwo, bazy danych ... Wymieniać można bez końca a trndy i technologie ewoluują. To wszystko bardzo mnie interesuje dlatego staram się poznawać coraz lepiej wszelkie aspekty z tym związane.',
      desc4:
        'Szeroko pojęte IT i różne inne technologie cały czas zasakują i rozwijają się bardzo szybko. Takie zagadnienia jak sztuczna inteligencja czy Big Data to pojęcia wykorzystywane na porządku dziennym na całym świecie. Dziś ciężko znaleźć duży zbiór danych niewspomagany czy to przez SI czy analizę Big Data. ',
    }
  },
}
</script>

<style lang="scss" scoped>
.section-content-wrapper {
  margin-top: 100vh;
  background-color: var(--component-content-section-background-color);
  padding-top: 140px;
  padding-bottom: 140px;
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
    background-image: linear-gradient(101deg, #fc466b, #3f5efb);
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
