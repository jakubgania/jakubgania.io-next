<template>
  <div v-if="displayHeader()" class="toolbar-header-container">
    <div>
      <nuxt-link :to="$i18n.path('')">
        <logo-component :normal-font-size="true" />
      </nuxt-link>
    </div>
    <div class="spacer-class" />
    <div @click="$emit('switchNavigationDrawer')">
      <icon-component :path="mdiMenu" :size="38" />
    </div>
  </div>
</template>

<script>
import { mdiMenu } from '@mdi/js'
import LogoComponent from '../components/logo'
import IconComponent from '../components/icon'

export default {
  components: {
    'logo-component': LogoComponent,
    'icon-component': IconComponent,
  },
  data() {
    return {
      mdiMenu,
    }
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
</style>
