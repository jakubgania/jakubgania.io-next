<template>
  <div>
    <client-only>
      <PortalRulesAlertComponent />
    </client-only>

    <NavigationDrawerComponent
      :drawer="drawer"
      @switchNavigationDrawer="switchNavigationDrawer"
      @updateNavigationDrawerValue="updateNavigationDrawerValue"
    />

    <ToolbarHeaderComponent @switchNavigationDrawer="switchNavigationDrawer" />

    <div class="nuxt-container">
      <Nuxt />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import PortalRulesAlertComponent from '@/components/PortalRulesAlert'
import NavigationDrawerComponent from '@/components/NavigationDrawer'
import ToolbarHeaderComponent from '@/components/ToolbarHeader'
import FooterComponent from '@/components/Footer'

export default {
  components: {
    PortalRulesAlertComponent,
    ToolbarHeaderComponent,
    NavigationDrawerComponent,
    FooterComponent,
  },
  data() {
    return {
      drawer: false,
    }
  },
  created() {
    this.$nuxt.$colorMode.preference = 'light'
  },
  methods: {
    switchNavigationDrawer() {
      this.drawer = !this.drawer
    },
    updateNavigationDrawerValue(value) {
      this.drawer = value
    },
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
@media only screen and (max-width: 960px) {
  .nuxt-container {
    padding-top: 48px;
  }
}
</style>
