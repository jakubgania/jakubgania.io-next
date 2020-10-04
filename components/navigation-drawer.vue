<template>
  <div v-if="showDrawerFlag">
    <div class="full-screen-cover" />
    <div class="navigation-drawer-container">
      <div>
        <div style="height: 60px; line-height: 60px;">
          <button @click="$emit('switchNavigationDrawer')" class="close-button">
            <icon-component
              :path="mdiClose"
              :size="36"
              :color="'--navigation-drawer-close-button-color'"
              :var="true"
            />
          </button>
        </div>
        <div style="flex-grow: 1; display: block;">
          <ul v-for="item in items" :key="item.title">
            <li @click="$emit('switchNavigationDrawer')" class="list-item">
              <nuxt-link :to="item.path" class="link-item">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="social-icons-section">
          <div class="social-links">
            <a
              v-for="(item, index) in socialLinks"
              :key="item.id"
              :href="item.link"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link-item"
            >
              <icon-component
                :path="socialIcons[index]"
                :color="'--navigation-drawer-social-icon-color'"
                :var="true"
              />
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
.full-screen-cover {
  background-color: var(--full-screen-cover-color);
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
  background-color: var(--navigation-drawer-background-color);
  overflow-x: hidden;
  transition: width ease 0.5s;

  & a {
    padding: 12px 8px 8px 27px;
    text-decoration: none;
    color: #818181;
    display: block;
  }
}
.list-item {
  &:hover {
    background-color: var(--navigation-drawer-list-item-hover-color);
  }
}
.social-icons-section {
  width: 100%;
  display: block;
  border-top: 1px solid var(--navigation-drawer-social-icons-border-color);
  position: absolute;
  bottom: 0;
}
.social-links {
  display: flex;

  a + a {
    border-left: 1px solid var(--navigation-drawer-social-icons-border-color);
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
    background-color: var(
      --navigation-drawer-socila-icons-background-color-hover
    );
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
