<template>
  <div class="content-container">
    <div class="experience-container">
      <div class="top-experience-text">
        <div
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">[</span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-dealy="400"
          data-aos-duration="1200"
          data-aos-once="true"
          style="width: 100%;"
        >
          Experience
        </div>
        <div
          data-aos="fade-left"
          data-aos-dealy="800"
          data-aos-duration="1200"
          data-aos-once="true"
        >
          <span class="bracket">]</span>
        </div>
      </div>
      <top-section-container-component
        :full-name="fullName"
        :personal-data="personalData"
        :dark-theme="false"
      />
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
              <!-- v-icon -->
            </h2>
          </div>
          <div :key="item.id" class="color-line"></div>
          <template v-for="(itemSection, index2) in item.sectionData">
            <div
              :key="itemSection.id"
              :class="{ 'border-bottom': index2 < item.sectionData.length - 1 }"
              class="section-test"
            >
              <div class="title-section">
                <div class="title-section">
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
                  <!-- v-chip -->
                </div>
                <div v-if="itemSection.icons" class="images-container">
                  <div
                    v-for="imageItem in itemSection.icons"
                    :key="imageItem.id"
                    class="image-tile"
                  >
                    <div class="image-section">
                      <img
                        :src="`https://jakubgania.io/data/expirience/technology-icons/${imageItem.path}`"
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
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TopSectionContainerComponent from '@/components/top-section-container'
import jsonData from '@/json/data'

export default {
  components: {
    TopSectionContainerComponent,
  },
  data() {
    return {
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
          content: 'custom description',
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
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 140px;
}
.expirience-container {
  width: 100%;
  margin-top: 60px;
}
.information-section {
  font-family: 'Nunito', sans-serif;
}
.top-experience-text {
  text-align: center;
  position: relative;
  z-index: 0;
  font-size: 6vw;
  font-weight: 500;
  letter-spacing: 10px;
  color: #f2f2f2;
  padding-left: 20px;
  display: flex;
}
.bracket {
  color: #000;
}
.main-description {
  margin-top: 40px;
  line-height: 2;
  letter-spacing: 0.5px;
}
.head-section {
  margin-top: 40px;
}
.color-line {
  height: 2px;
  background-image: linear-gradient(to right, #6a11cb, #2575fc, #ee609c);
}
.section-test {
  margin-top: 20px;
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
  font-size: 48px;
  padding-bottom: 10px;
}
.border-bottom {
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
}
.images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

$image-tile-max-height: 160px;

.image-tile {
  width: $image-tile-max-height;
  min-height: $image-tile-max-height;
  height: auto;
  margin-right: 30px;
  margin-bottom: 30px;
  transition: transform 0.2s;
}
.image-section {
  position: relative;
  width: $image-tile-max-height;
  height: $image-tile-max-height;
  background-color: #fff;
}
.xghp {
  max-width: $image-tile-max-height;
  max-height: $image-tile-max-height;
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
}
.tag-item {
  margin-right: 10px;
  letter-spacing: 1.4px;
  font-size: 12px;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
}

@media only screen and (max-width: 960px) {
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
  .information-section {
    padding-left: 14px;
    padding-right: 14px;
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
    font-size: 20px;
  }
  .title-text {
    font-size: 16px;
  }
  .title-description-section {
    font-size: 16px;
  }

  $image-tile-max-height: 100px;

  .image-tile {
    width: $image-tile-max-height;
    min-height: $image-tile-max-height;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 20px;
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
  .top-experionce-text {
    font-size: 8vw;
    padding-left: 20px;
    padding-right: 12px;
    letter-spacing: 8px;
  }
  .content-container {
    margin-bottom: 60px;
  }
}
</style>
