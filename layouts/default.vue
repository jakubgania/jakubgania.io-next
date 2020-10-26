<template>
  <div>
    <navigation-drawer-component
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
    />

    <toolbar-header-component
      @switchNavigationDrawer="switchNavigationDrawer"
    />

    <div class="nuxt-container">
      <Nuxt />
    </div>

    <footer-component />
  </div>
</template>

<script>
import ToolbarHeaderComponent from '@/components/ToolbarHeader'
import NavigationDrawerComponent from '@/components/NavigationDrawer'
import FooterComponent from '@/components/footer'

export default {
  components: {
    ToolbarHeaderComponent,
    NavigationDrawerComponent,
    FooterComponent,
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value
    },
  },
  created() {
    this.$nuxt.$colorMode.preference = 'light'
  },
}
</script>

<style lang="scss">
@import '../assets/styles/fonts.scss';

::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: var(--scrollbar-track-color);
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: var(--scrollbar-thumb-color);
}

body {
  background-color: var(--bg);
}
.nuxt-container {
  padding-top: 64px;
}
// comment
@media only screen and (max-width: 960px) {
  .nuxt-container {
    padding-top: 48px;
  }
}
</style>
