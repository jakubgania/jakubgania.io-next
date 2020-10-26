<template>
  <div v-show="showDrawerFlag" class="menu-wrapper">
    <div class="content-container-menu">
      <button class="close-button" @click="$emit('switchNavigationDrawer')">
        <div class="close-icon" />
      </button>

      <div class="list-section">
        <li v-for="item in items" :key="item.id" style="list-style: none;">
          <ul class="list-item">
            <nuxt-link
              :to="item.path"
              class="list-item-link"
              @click.native="showScrollbar()"
            >
              / {{ item.title }} /
            </nuxt-link>
          </ul>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from '../../json/menu.json'

export default {
  props: {
    showMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: menuItems.menu,
    }
  },
  computed: {
    showDrawerFlag: {
      get() {
        this.toggleScrollbar(this.showMenu)
        return this.showMenu
      },
      set(value) {
        this.$emit('switchNavigationDrawer')
      },
    },
  },
  methods: {
    toggleScrollbar(showMenu) {
      if (process.browser) {
        if (showMenu) {
          document.getElementsByTagName('html')[0].style.overflow = 'hidden'
        } else {
          document.getElementsByTagName('html')[0].style.overflow = 'auto'
        }
      }
    },
    showScrollbar() {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--home-page-menu-component-background-color);
  margin-top: -64px;
  z-index: 8000;
}
.content-container-menu {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
  font-size: 12.8px;
  line-height: 1.28;
  margin-left: auto;
  margin-right: auto;
}
.list-section {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
}
.list-item-link {
  font-size: 12px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  letter-spacing: 8px;
  transition: letter-spacing 0.2s ease;
  color: var(--home-page-menu-component-text-color);

  &:hover {
    color: blue;
    letter-spacing: 10px;
    transition: letter-spacing 0.2s ease;
  }
}
.list-item {
  margin-bottom: 40px;
}
.close-icon {
  position: absolute;
  right: 24px;
  top: 50%;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  color: black;
  // color: var(--navigation-drawer-close-button-color);
}
.close-icon:hover {
  opacity: 1;
}
.close-icon::before,
.close-icon::after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 1px;
  background-color: var(--home-page-menu-component-close-icon-color);
}
.close-icon::before {
  transform: rotate(45deg);
}
.close-icon::after {
  transform: rotate(-45deg);
}

@media only screen and (max-width: 600px) {
  .list-item-link:hover {
    letter-spacing: 8px;
    transition: letter-spacing 0s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}
</style>
