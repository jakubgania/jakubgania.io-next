<template>
  <div
    :class="{
      'logo--big-font': bigFontSize,
      'logo--normal-font': normalFontSize,
    }"
    class="logo"
  >
    {{ logo }}
  </div>
</template>

<script>
export default {
  props: {
    bigFontSize: {
      type: Boolean,
      default: false,
    },
    normalFontSize: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo: 'Jakub Gania Software',
    }
  },
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  letter-spacing: 0.6px;
  &--big-font {
    font-size: 60px;
  }
  &--normal-font {
    font-size: 22px;
  }
}
@media only screen and (max-width: 960px) {
  .logo {
    &--normal-font {
      font-size: 20px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .logo {
    &--big-font {
      font-size: 36px;
    }
    &--normal-font {
      font-size: 12px;
    }
  }
}
</style>
