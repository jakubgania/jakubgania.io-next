<template>
  <div v-if="displayHeader()" class="toolbar-header-container">
    <div>
      <nuxt-link :to="$i18n.path('')">
        <logo-component :normal-font-size="true" />
      </nuxt-link>
    </div>
    <div class="spacer-class" />
    <div class="nav-icon" @click="$emit('switchNavigationDrawer')">
      <div class="menu-icon-hamburger" />
      <div class="menu-icon-hamburger" />
      <div class="menu-icon-hamburger" />
    </div>
  </div>
</template>

<script>
import LogoComponent from '../components/logo'

export default {
  components: {
    'logo-component': LogoComponent,
  },
  mounted() {
    this.displayHeader()
  },
  methods: {
    displayHeader() {
      console.log(this.$route.name)
      return this.$route.name !== 'index'
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar-header-container {
  height: 64px;
  background: hsla(0, 0%, 100%, 0.6);
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
  height: 2px;
  background-color: #000;
  transition: background-color 0.2s ease;
  margin: 6px 0;
}
.nav-icon {
  &:hover {
    .menu-icon-hamburger {
      background-color: #8c8c8c;
      transition: background-color 0.2s ease;
    }
  }
}
</style>
