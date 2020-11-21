<template>
  <div class="breadcrumbs-wrapper" :style="breadcrumbsWrapperStyle">
    <div class="breadcrumbs-section">
      <nuxt-link
        :to="$i18n.path(parentPagePath)"
        class="breadcrumbs-section__link"
      >
        {{ parentPageTitle }}
      </nuxt-link>
      <IconComponent :path="mdiChevronRight" :size="14" :color="'#000'" />
      <span class="breadcrumbs-section__child-page-text">
        {{ childPageTitle }}
      </span>
    </div>
  </div>
</template>

<script>
import { mdiChevronRight } from '@mdi/js'
import IconComponent from './Icon'

export default {
  props: {
    parentPagePath: {
      type: String,
      default: '',
    },
    parentPageTitle: {
      type: String,
      default: '',
    },
    childPageTitle: {
      type: String,
      default: '',
    },
    maxWidthWrapper: {
      type: Number,
      default: 1200,
    },
  },
  components: {
    IconComponent,
  },
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    breadcrumbsWrapperStyle() {
      return {
        maxWidth: this.maxWidthWrapper + 'px',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs-wrapper {
  max-width: 1200px;
  margin-top: 80px;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-style: normal;
  font-size: 10px;
  letter-spacing: 4px;
}
.breadcrumbs-section {
  line-height: 1.5;
  display: flex;
  margin-left: 5px;

  &__link {
    margin-right: 14px;
    color: #06f;
  }

  &__child-page-text {
    margin-left: 14px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
