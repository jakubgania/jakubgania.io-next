<template>
  <div class="dotted-background">
    <div class="top-section-title">
      <div style="line-height: 1.5; display: flex; margin-left: 5px;">
        <nuxt-link
          :to="$i18n.path('')"
          style="margin-right: 14px; color: #06f;"
        >
          Home
        </nuxt-link>
        <IconComponent :path="mdiChevronRight" :size="14" :color="'#000'" />
        <span style="margin-left: 14px;">
          Doświadczenie
        </span>
      </div>
    </div>
    <div class="top-experience-text">
      <div style="display: inline-flex;">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">
            {
          </span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-dealy="200"
          data-aos-duration="1200"
          data-aos-once="true"
          class="experience-text"
        >
          Experience
        </div>
        <div
          data-aos="fade-left"
          data-aos-dealy="50"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">
            }
          </span>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="experience-container">
        <TopSectionContainerComponent
          :full-name="fullName"
          :personal-data="personalData"
        />
        <div class="social-section">
          <div class="social-icons-container">
            <div class="social-item">
              <a
                href="https://github.com/jakubgania"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
            <div class="social-line" />
            <div class="social-item">
              <a
                href="https://www.linkedin.com/in/jakubgania"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div class="social-line" />
            <div class="social-item">
              <a
                href="https://twitter.com/jakubgania"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div class="social-line" />
            <div class="social-item">
              <a
                href="https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
        <div class="information-section">
          <div class="main-description">
            <div>
              {{ description }}
            </div>
          </div>
          <template v-for="item in information">
            <div :key="item.id" class="head-section">
              <h2 class="head-title">
                {{ item.titleSection }}
              </h2>
            </div>
            <div :key="item.id"></div>
            <div :key="item.id" class="xtrox">
              <template v-for="itemSection in item.sectionData">
                <div :key="itemSection.id" class="section-test">
                  <div class="title-section">
                    <div class="title-text">
                      {{ itemSection.date }}
                    </div>
                  </div>
                  <div class="description-section">
                    <div style="margin-bottom: 10px;">
                      <div class="title-description-section">
                        {{ itemSection.title }}
                      </div>
                      <div class="subtitle-description-section">
                        {{ itemSection.subtitle }}
                      </div>
                    </div>
                    <div class="description" v-html="itemSection.description" />
                    <div v-if="itemSection.tags" class="tags-container">
                      <div
                        v-for="tagItem in itemSection.tags"
                        :key="tagItem.id"
                        class="tag-item"
                      >
                        {{ tagItem.title }}
                      </div>
                    </div>
                    <div v-if="itemSection.icons" class="images-container">
                      <div
                        v-for="imageItem in itemSection.icons"
                        :key="imageItem.id"
                        class="image-tile"
                      >
                        <div class="image-section">
                          <img
                            :src="`https://s3.eu-central-1.amazonaws.com/jakubgania.io-experience/technology-icons/${imageItem.path}`"
                            :alt="imageItem.alt"
                            class="xghp"
                          />
                        </div>
                        <div class="image-description">
                          {{ imageItem.description }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiChevronRight } from '@mdi/js'
import TopSectionContainerComponent from '@/components/TopSectionContainer'
import jsonData from '@/json/data'
import IconComponent from '../../../components/Icon'

export default {
  components: {
    IconComponent,
    TopSectionContainerComponent,
  },
  data() {
    return {
      mdiChevronRight,
      personalData: jsonData.expirience.sectionPersonalData,
      fullName: jsonData.expirience.sectionPersonalData.fullName,
      description: jsonData.expirience.sectionPersonalData.description,
      information: jsonData.expirience.information,
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Doświadczenie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Doświadczenie',
        },
        {
          name: 'keywords',
          content: 'Doświadczenie',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Doświadczenie',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/experience',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Moje doświadczenie',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style>
div .section .description p {
  margin-bottom: 2px;
}
div .section .description img {
  width: 100%;
  margin-top: 20px;
}
</style>

<style lang="scss" scoped>
.top-section-title {
  max-width: 1200px;
  // text-align: center;
  margin-bottom: 10px;
  padding-top: 80px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-style: normal;
  font-size: 10px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 4px;
}

// Colors
$bg-color: hsl(255, 255, 255);
$dot-color: hsl(0, 0, 0);

// Dimensions
$dot-size: 1px;
$dot-space: 70px;

.dotted-background {
  background: linear-gradient(
        90deg,
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
    $dot-color;
  background-size: $dot-space $dot-space;
}
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 140px;
}
.expirience-container {
  width: 100%;
  margin-top: 100px;
}
.experience-text {
  width: 100%;
  padding: 14px;
  background: url(../../../assets/images/background-abstract.jpg) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: center;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
}
.qwe12 {
  text-align: center;
  display: flex;
}
.top-experience-text {
  text-align: center;
  position: relative;
  z-index: 0;
  font-size: 6vw;
  font-weight: 700;
  letter-spacing: 6px;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 20px;
}
.bracket {
  color: #f2f2f2;
}
.xdrty {
  display: flex;
  padding-top: 20px;
  padding-bottom: 60px;
  margin-right: 4px;
}
.social-section {
  margin-top: 100px;
  margin-bottom: 100px;
}
.social-icons-container {
  display: flex;
  flex-wrap: wrap;
}
.social-item {
  width: 24%;
  text-align: center;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: 700;
  transition: letter-spacing 0.2s ease;

  &:hover {
    transition: letter-spacing 0.2s ease;
    letter-spacing: 3px;
    color: #f30;
  }
}
.social-line {
  border-right: 2px solid black;
  transform: skewX(-30deg);
}
.main-description {
  line-height: 2;
  letter-spacing: 0.5px;
}
.head-section {
  // margin-top: 40px;
}
.xtrox {
  margin-top: 90px;
  margin-bottom: 90px;
}
.section-test {
  margin-bottom: 60px;
  display: flex;
}
.title-section {
  width: 30%;
}
.title-text {
  font-size: 16px;
  font-weight: 500;
  padding-top: 4px;
}
.title-description-section {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.4px;
}
.description-section {
  width: 70%;
}
.subtitle-description-section {
  font-style: italic;
}
.description {
  line-height: 2;
  letter-spacing: 0.5px;
}
.item-section {
  letter-spacing: 0.5px;
  padding-bottom: 14px;
}
.head-title {
  letter-spacing: 1px;
  font-size: 54px;
  font-weight: 700;

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 80px;
    height: 2px;
    background-color: #06f;
    margin-top: 20px;
  }
}
.images-container {
  display: flex;
  flex-wrap: wrap;
  // align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

$image-tile-max-height: 160px;

.image-tile {
  width: $image-tile-max-height;
  min-height: $image-tile-max-height;
  height: auto;
  margin-bottom: 50px;
  transition: transform 0.2s;
}
.image-section {
  position: relative;
  width: $image-tile-max-height;
  height: $image-tile-max-height;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
}
.xghp {
  max-width: 100px;
  max-height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.image-tile:hover {
  transform: scale(1.1);
}
.image-description {
  font-size: 12px;
  font-weight: 600;
  padding-top: 8px;
  text-align: center;
}
.tags-container {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.tag-item {
  margin-right: 10px;
  letter-spacing: 1.4px;
  font-size: 12px;
  font-weight: 600;
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #06f;
  border-radius: 20px;
  color: #fff;
}
@media only screen and (max-width: 960px) {
  .experience-text {
    padding-top: inherit;
  }
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  $image-tile-max-height: 120px;

  .image-tile {
    width: $image-tile-max-height;
    min-height: $image-tile-max-height;
  }
  .image-section {
    width: $image-tile-max-height;
    height: $image-tile-max-height;
  }
  .xghp {
    max-width: $image-tile-max-height;
    max-height: $image-tile-max-height;
  }
}

@media only screen and (max-width: 600px) {
  .top-section-title {
    max-width: 1200px;
    // text-align: center;
    margin-bottom: 10px;
    padding-top: 20px;
    font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
    font-style: normal;
    font-size: 10px;
    margin-left: 10px;
    margin-right: auto;
    letter-spacing: 4px;
  }

  // Dimensions
  $dot-size: 1px;
  $dot-space: 40px;

  .dotted-background {
    background: linear-gradient(
          90deg,
          $bg-color ($dot-space - $dot-size),
          transparent 1%
        )
        center,
      linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
      $dot-color;
    background-size: $dot-space $dot-space;
  }
  .content-container {
    margin-bottom: 60px;
    padding-left: 0;
    padding-right: 0;
  }
  .section-test {
    display: block;
  }
  .information-section {
    padding-left: 14px;
    padding-right: 14px;
  }
  .xtrox {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .section {
    display: block;
  }
  .title-section {
    width: 100%;
  }
  .description-section {
    width: 100%;
  }
  .main-description {
    font-size: 14px;
  }
  .description {
    font-size: 14px;
  }
  .head-title {
    font-size: 26px;
  }
  .title-text {
    font-size: 12px;
    padding-bottom: 10px;
    letter-spacing: 1px;
  }
  .title-description-section {
    font-size: 16px;
  }

  $image-tile-max-height: 40px;

  .image-tile {
    width: $image-tile-max-height;
    min-height: $image-tile-max-height;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
    flex: 1 0 20%;
  }
  .image-section {
    width: $image-tile-max-height;
    height: $image-tile-max-height;
  }
  .xghp {
    max-width: $image-tile-max-height;
    max-height: $image-tile-max-height;
  }
  .tag-item {
    margin-bottom: 10px;
  }
  .expirience-container {
    margin-top: 40px;
  }
  .top-experience-text {
    font-size: 8vw;
    padding-left: 20px;
    padding-right: 12px;
    letter-spacing: 8px;
    padding-top: 50px;
    padding-bottom: 10px;
  }
  .social-section {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
</style>
