<template>
  <div v-show="showDrawerFlag" class="menu-wrapper">
    <div class="content-container-menu">
      <button
        class="close-button"
        type="button"
        aria-label="Menu button"
        @click="$emit('switchNavigationDrawer')"
      >
        <span class="close-icon" />
      </button>

      <div class="list-section">
        <ul style="list-style: none;">
          <li v-for="(item, index) in items" :key="item.id" class="list-item">
            <nuxt-link
              :to="$i18n.path(item.path)"
              class="list-item-link"
              @click.native="showScrollbar()"
            >
              <div style="display: flex;">
                <span class="span-bracket-left">
                  {
                </span>
                <div style="display: flex; position: relative;">
                  <span class="item-number">
                    {{ '0' + (index + 1) }}
                  </span>
                  <span class="text-texm">
                    {{ $t(item.name) }}
                  </span>
                </div>
                <span class="span-bracket-right">
                  }
                </span>
              </div>
            </nuxt-link>
          </li>
        </ul>
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
      this.showDrawerFlag = false
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-wrapper::before {
  content: '';
  display: block;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--home-page-menu-component-background-color);
  z-index: 99999999;
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
  -webkit-overflow-scrolling: auto !important;
  overflow: visible;
}
.list-section {
  position: absolute;
  z-index: 9999999999;
  // position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
}
.span-bracket-left {
  position: relative;
  // left: -7px;
  left: -20px;
  color: #e7e7e7;
  opacity: 0;
  transition: 0.25s;
}
.span-bracket-right {
  position: relative;
  // right: -7px;
  right: -20px;
  color: #e7e7e7;
  opacity: 0;
  transition: 0.2s;
}
.list-item-link {
  font-size: 12.4px;
  position: relative;
  font-weight: 600;
  letter-spacing: 4px;
  transition: letter-spacing 0.2s ease;
  color: var(--home-page-menu-component-text-color);

  &:hover {
    color: #06f;
    transition: letter-spacing 0.2s ease;

    & .span-bracket-left {
      // left: -20px;
      left: -10px;
      color: #e7e7e7;
      opacity: 1;
    }

    & .span-bracket-right {
      // right: -20px;
      right: -10px;
      color: #e7e7e7;
      opacity: 1;
    }
  }
}
.text-texm {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 10px;
    border-bottom: 1px solid #e7e7e7;
    margin-right: 14px;
  }
  &::after {
    margin-left: 14px;
  }
}
.item-number {
  color: #e7e7e7;
  margin-right: 14px;
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
  z-index: 9999999999;
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
  .list-item-link {
    letter-spacing: 4px;
  }
  .list-item-link:hover {
    letter-spacing: 4px;
    transition: letter-spacing 0s ease;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}
</style>
