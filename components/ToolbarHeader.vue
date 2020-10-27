<template>
  <div v-if="displayHeader()" class="toolbar-header-container">
    <div>
      <nuxt-link :to="$i18n.path('')">
        <LogoComponent :normal-font-size="true" />
      </nuxt-link>
    </div>
    <div class="spacer-class" />
    <div>
      <div class="nav-icon" @click="$emit('switchNavigationDrawer')">
        <div class="menu-icon-hamburger" />
        <div class="menu-icon-hamburger" />
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from '../components/Logo'

export default {
  components: {
    LogoComponent,
  },
  mounted() {
    this.displayHeader()
  },
  methods: {
    displayHeader() {
      console.log('dispaly header info ', this.$route)
      return this.$route.name !== 'index' && this.$route.name !== 'lang'
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar-header-container {
  height: 64px;
  background: var(--toolbar-header-container-background-color);
  backdrop-filter: saturate(180%) blur(14px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  line-height: 64px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
}
.spacer-class {
  flex-grow: 1 !important;
}
.menu-icon-hamburger {
  width: 34px;
  height: 0.5px;
  background-color: var(--menu-icon-hamburger-color);
  transition: background-color 0.2s ease;
  margin: 8px 0;
}
.nav-icon {
  margin-top: 6px;
  display: inline-block;

  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
      transition: background-color 0.2s ease;
    }
  }
}

@media only screen and (max-width: 960px) {
  .toolbar-header-container {
    height: 48px;
    line-height: 48px;
  }
}
@media only screen and (max-width: 600px) {
  .toolbar-header-container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .menu-icon-hamburger {
    width: 30px;
    margin: 11px 0;
  }
  .nav-icon {
    margin-top: 8px;
  }
}
</style>
