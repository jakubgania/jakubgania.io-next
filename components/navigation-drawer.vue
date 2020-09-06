<template>
  <div v-if="showDrawerFlag">
    <div class="xlop" />
    <div class="navigation-drawer-container">
      <div>
        <div style="height: 60px; line-height: 60px;">
          <button
            @click="$emit('switchNavigationDrawer')"
            style="color: red; float: right; margin-right: 10px;"
          >
            menu
          </button>
        </div>
        <ul>
          <li>list</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showDrawerFlag: {
      get() {
        this.toggleScrollbar(this.drawer)
        return this.drawer
      },
      set(value) {
        this.$emit('switchNavigationDrawer')
      },
    },
  },
  methods: {
    toggleScrollbar(drawer) {
      if (process.browser) {
        if (drawer) {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.xlop {
  background-color: rgb(33, 33, 33);
  position: fixed;
  top: 0;
  right: 0;
  opacity: 0.46;
  width: 100%;
  height: 100vh;
  z-index: 99994;
}
.navigation-drawer-container {
  display: block;
  height: 100%;
  width: 320px;
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: display ease 0.5s;

  & a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
  }
}
</style>
