<template>
  <div
    :class="{
      'logo--big-font': bigFontSize,
      'logo--normal-font': normalFontSize,
    }"
    class="logo"
  >
    <template v-if="animation">
      <span id="logo-text-part-1" />
      <span id="logo-underscore-1" class="underscore" />
      <span id="logo-text-part-2" />
      <span id="logo-underscore-2" class="underscore" />
      <span id="logo-text-part-3" />
    </template>
    <template v-else>
      <span>
        {{ logoText1 }}
      </span>
      <span class="underscore">
        {{ underscore }}
      </span>
      <span>
        {{ logoText2 }}
      </span>
      <span class="underscore">
        {{ underscore }}
      </span>
      <span>
        {{ logoText3 }}
      </span>
    </template>
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
    animation: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      logo: 'Jakub Gania Software',
      logoText1: 'jakub',
      logoText2: 'gania',
      logoText3: 'software',
      underscore: '_',
    }
  },
  mounted() {
    if (process.browser && this.animation) {
      this.renderLogo()
    }
  },
  methods: {
    renderLogo() {
      let counter = 0
      const logoTextPart1 = document.getElementById('logo-text-part-1')
      const logoTextPart2 = document.getElementById('logo-text-part-2')
      const logoTextPart3 = document.getElementById('logo-text-part-3')
      const logoUnderscore1 = document.getElementById('logo-underscore-1')
      const logoUnderscore2 = document.getElementById('logo-underscore-2')
      const logoText =
        this.logoText1 +
        this.underscore +
        this.logoText2 +
        this.underscore +
        this.logoText3

      setTimeout(() => {
        const writeLogo = setInterval(() => {
          if (counter < logoText.length) {
            if (counter < 5) logoTextPart1.textContent += logoText[counter]
            if (counter === 5) logoUnderscore1.textContent += logoText[counter]
            if (counter > 5 && counter < 11)
              logoTextPart2.textContent += logoText[counter]
            if (counter === 11) logoUnderscore2.textContent += logoText[counter]
            if (counter > 11) logoTextPart3.textContent += logoText[counter]

            counter++
          } else {
            clearInterval(writeLogo)
          }
        }, 130)
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  letter-spacing: 2px;
  color: var(--logo-color);
  min-width: 200px;

  &--big-font {
    font-size: 60px;
  }

  &--normal-font {
    font-size: 18px;
  }
}
.underscore {
  margin-left: -8px;
  margin-right: -6px;
  color: #06f;
}

@media only screen and (max-width: 960px) {
  .logo {
    &--normal-font {
      font-size: 14px;
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
