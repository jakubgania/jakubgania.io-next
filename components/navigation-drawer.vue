<template>
  <div v-if="showDrawerFlag">
    <div class="xlop" />
    <div class="navigation-drawer-container">
      <div>
        <div style="height: 60px; line-height: 60px;">
          <button @click="$emit('switchNavigationDrawer')" class="close-button">
            <icon-component :path="mdiClose" :size="36" />
          </button>
        </div>
        <div style="flex-grow: 1; display: block;">
          <ul v-for="item in items" :key="item.title">
            <li @click="$emit('switchNavigationDrawer')">
              <nuxt-link :to="item.path" class="link-item">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="social-icons-xb">
          <div class="social-links">
            <a
              v-for="(item, index) in socialLinks"
              :key="item.id"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link-item"
            >
              <icon-component :path="socialIcons[index]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiGithub,
  mdiLinkedin,
  mdiTwitter,
  mdiYoutube,
  mdiClose,
} from '@mdi/js'
import socialLinksItems from '../json/social-links.json'
import menuItems from '../json/menu.json'
import IconComponent from '../components/icon'

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    'icon-component': IconComponent,
  },
  data() {
    return {
      socialIcons: [mdiGithub, mdiLinkedin, mdiTwitter, mdiYoutube],
      socialLinks: socialLinksItems.data,
      items: menuItems.menu,
      mdiClose,
    }
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
  transition: width ease 0.5s;

  & a {
    padding: 12px 8px 8px 27px;
    text-decoration: none;
    color: #818181;
    display: block;
  }
}
.social-icons-xb {
  width: 100%;
  display: block;
  border-top: 1px solid #f2f2f2;
  position: absolute;
  bottom: 0;
}
.social-links {
  display: flex;

  a + a {
    border-left: 1px solid #f2f2f2;
  }

  &--dark-theme {
    a + a {
      border-left: 1px solid #2f363d;
    }
  }
}
.social-link-item {
  width: 33.333%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 48px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
    transition: background-color 0.2s ease;
  }
}
.link-item {
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-left: 10px;
  font-size: 12.8px;
}
.close-button {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  outline: none;
}
</style>
