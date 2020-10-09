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

    <div style="padding-top: 64px;">
      <Nuxt />
    </div>

    <footer-component />
  </div>
</template>

<script>
import ToolbarHeaderComponent from '@/components/ToolbarHeader'
import NavigationDrawerComponent from '@/components/navigation-drawer'
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
</style>
