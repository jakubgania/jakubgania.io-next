<template>
  <div>
    <HeadTitleSection :sectionTitle="$t(headTitleSection)" />
    <div class="xtrox">
      <template v-for="item in languages">
        <div class="section-test" :key="item.id">
          <div class="title-section">
            <div class="title-text">
              {{ $t(item.date) }}
            </div>
          </div>
          <div class="description-section">
            <div>
              <div class="title-description-section">
                {{ $t(item.title) }}
              </div>
              <div class="subtitle-description-section">
                {{ $t(item.subtitle) }}
              </div>
            </div>
            <div class="description" v-html="$t(item.description)" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import languagesDataArray from '../../json/languages'
import HeadTitleSection from './HeadTitleSection'

export default {
  components: {
    HeadTitleSection,
  },
  data() {
    return {
      headTitleSection: languagesDataArray.titleSection,
      languages: languagesDataArray.data,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/experience.scss';
</style>
