<template>
  <div>
    <HeadTitleSection :section-title="$t(headTtitleSection)" />
    <div class="xtrox">
      <template v-for="item in items">
        <div :key="item.id" class="section-test">
          <div class="title-section">
            <div class="title-text">
              {{ item.date }}
            </div>
          </div>
          <div class="description-section">
            <div class="description" v-html="item.description" />
            <div v-if="item.tags" class="tags-container">
              <div
                v-for="tagItem in item.tags"
                :key="tagItem.id"
                class="tag-item"
              >
                {{ tagItem.title }}
              </div>
            </div>
            <div class="images-container">
              <div
                v-for="image in item.icons"
                :key="image.id"
                class="image-title"
              >
                <div class="image-section">
                  <img
                    :src="`https://s3.eu-central-1.amazonaws.com/jakubgania.io-experience/technology-icons/${image.path}`"
                    :alt="image.alt"
                    class="xghp"
                  />
                </div>
                <div class="image-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import skillsDataArray from '../../json/skills'
import HeadTitleSection from './HeadTitleSection'

export default {
  components: {
    HeadTitleSection,
  },
  data() {
    return {
      headTtitleSection: skillsDataArray.titleSection,
      items: skillsDataArray.data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/experience.scss';

.images-container {
  display: flex;
  flex-wrap: wrap;
  // align-items: center;
  // justify-content: space-between;
  justify-content: flex-start;
  margin-top: 20px;
}

$image-tile-max-height: 100px;

.image-title {
  width: $image-tile-max-height;
  min-height: $image-tile-max-height;
  height: auto;
  margin-bottom: 20px;
  transition: transform 0.2s;
  margin-right: 20px;
}
.image-section {
  position: relative;
  width: $image-tile-max-height;
  height: $image-tile-max-height;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 100px;
  margin-left: auto;
  margin-right: auto;
}
.xghp {
  max-width: 60px;
  max-height: 60px;
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
  color: var(--color-text);
}
.tags-container {
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}
.tag-item {
  margin-bottom: 10px;
  margin-right: 10px;
  letter-spacing: 1.4px;
  font-size: 12px;
  font-weight: 600;
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  background-color: #edf2f7;
  border-radius: 20px;
  color: #2d3748;
  cursor: pointer;
}

@media only screen and (max-width: 960px) {
  $image-tile-max-height: 80px;

  .image-title {
    width: $image-tile-max-height;
    min-height: $image-tile-max-height;
  }
  .image-section {
    width: $image-tile-max-height;
    height: $image-tile-max-height;
  }
  .xghp {
    max-width: 40px;
    max-height: 40px;
  }
}

@media only screen and (max-width: 600px) {
  $image-tile-max-height: 80px;

  .image-title {
    width: $image-tile-max-height;
    min-height: $image-tile-max-height;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    flex: 1 0 20%;
  }
  .image-section {
    width: $image-tile-max-height;
    height: $image-tile-max-height;
  }
  .xghp {
    max-width: 40px;
    max-height: 40px;
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
}
</style>
