<template>
  <div>
    <HeadTitleSection :section-title="$t(headTitleSection)" />
    <div class="xtrox">
      <template v-for="item in experience">
        <div :key="item.id" class="section-test">
          <div class="title-section">
            <div class="title-text">
              {{ item.date }}
            </div>
          </div>
          <div class="description-section">
            <div style="margin-bottom: 10px;">
              <div class="title-description-section">
                {{ item.title }}
              </div>
              <div class="subtitle-description-section">
                {{ item.subtitle }}
              </div>
            </div>
            <div class="description" v-html="item.description" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import experienceDataArray from '../../json/experience'
import HeadTitleSection from './HeadTitleSection'

export default {
  components: {
    HeadTitleSection,
  },
  data() {
    return {
      headTitleSection: experienceDataArray.titleSection,
      experience: experienceDataArray.data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/experience.scss';
</style>
