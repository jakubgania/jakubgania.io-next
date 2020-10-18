<template>
  <div v-show="showDrawerFlag" class="menu-wrapper">
    <div class="content-container-menu">
      <!-- <subpage-title-section-component :title="title" /> -->

      <button @click="$emit('switchNavigationDrawer')" class="close-button">
        <div class="close-icon" />
      </button>

      <div class="list-section">
        <li v-for="item in items" :key="item.id" style="list-style: none;">
          <ul class="list-item">
            <nuxt-link :to="item.path" class="list-item-link">
              / {{ item.title }} /
            </nuxt-link>
          </ul>
        </li>
      </div>

      <!-- <div style="margin-top: 20px; letter-spacing: 2px;">
        <span style="color: #4d4dff; font-weight: 600;">
          &nbsp;<span class="number-line">1</span>&nbsp;&nbsp;data
        </span>
        <span style="color: #c3f; font-weight: 600;">
          ()
        </span>
        <span style="color: #c3f; font-weight: 600;">
          {
        </span>
      </div>
      <div style="letter-spacing: 2px;">
        <span style="color: #69f; font-weight: 600;">
          &nbsp;<span class="number-line">2</span>&nbsp;&nbsp;&nbsp;&nbsp;return
        </span>
        <span style="color: #69f; font-weight: 600;">
          {
        </span>
      </div>
      <div>
        <div style="letter-spacing: 2px; font-weight: 600;">
          &nbsp;<span class="number-line">3</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items:
          <span style="color: orange;">[</span>
        </div>
      </div> -->

      <!-- <div
        v-for="(item, index) in items"
        :key="item.id"
        class="link-section"
        style="font-weight: 600;"
      >
        <template v-if="item.path">
          <nuxt-link :to="item.path" class="link">
            <div class="link-x">
              <template v-if="index * 3 + 1 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 1 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #c3f;">{</span>
            </div>
            <div class="">
              <template v-if="index * 3 + 2 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 2 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="link-text xpo" style="color: #8c8c8c;">
                page:
              </span>
              <span
                class="link-text"
                style="font-family: 'Roboto Mono', monospace;"
              >
                {{ "'" + item.title + "'" }}
              </span>
            </div>
            <div class="link-x">
              <template v-if="index * 3 + 3 + 3 < 10">
                &nbsp;
              </template>
              <span class="number-line">{{ index * 3 + 3 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #c3f;">
                } <span class="comma">,</span>
              </span>
            </div>
          </nuxt-link>
        </template>
        <template v-if="item.url">
          <a :href="item.url" target="_blank" class="link">
            <div class="link-x">
              <span class="number-line">{{ index * 3 + 1 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #c3f;">
                {
              </span>
            </div>
            <div class="">
              <span class="number-line">{{ index * 3 + 2 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="link-text xpo" style="color: #8c8c8c;">
                page:
              </span>
              <span class="link-text">
                {{ "'" + item.title + "'" }}
              </span>
            </div>
            <div class="link-x">
              <span class="number-line">{{ index * 3 + 3 + 3 }}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="xpo" style="color: #c3f;">
                }
                <span
                  :class="{ 'comma-not': index == items.length - 1 }"
                  class="comma"
                >
                  ,
                </span>
              </span>
            </div>
          </a>
        </template>
      </div> -->

      <!-- <div>
        <span class="number-line" style="font-weight: 600;">
          43
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style="color: orange; font-weight: 600;">
          ]
        </span>
      </div>
      <div>
        <span class="number-line" style="font-weight: 600;">
          44
        </span>
        &nbsp;&nbsp;
        <span style="color: #69f; font-weight: 600;">
          &nbsp;&nbsp;&nbsp;}
        </span>
      </div>
      <div>
        <span class="number-line" style="font-weight: 600;">
          45
        </span>
        &nbsp;
        <span style="color: #c3f; font-weight: 600;">
          }
        </span>
      </div> -->
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
  },
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
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
// .link {
//   text-decoration: none;
// }
// .link-text {
//   color: #000;
//   letter-spacing: 1.5px;
//   font-size: 12px;
//   padding-top: 2px;
//   padding-bottom: 2px;
//   font-weight: 500;
// }
// .link-text-dark-theme {
//   color: #0fc;
// }
// .link-x {
//   padding: 0;
// }
// .number-line {
//   color: #d9d9d9;
// }
// .link-section:hover {
//   background-color: #f2f2f2;
//   padding-left: 12px;

//   .number-line {
//     margin-left: -12px;
//   }

//   .xpo {
//     padding-left: 12px;
//     transition: padding-left 0.2s ease;
//   }

//   .link-text-dark-theme {
//     color: #000;
//   }
// }
// .comma {
//   color: #69f;
// }
// .comma-not {
//   display: none;
// }
// .top-image {
//   width: 100%;
//   height: 30vw;
//   max-height: 940px;
//   min-height: 200px;
//   background-image: url('../../assets/images/background.jpg');
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   margin-bottom: 80px;
// }
.list-section {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.list-item-link {
  font-size: 12px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  letter-spacing: 8px;

  &:hover {
    color: blue;
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
  background-color: #333;
}
.close-icon::before {
  transform: rotate(45deg);
}
.close-icon::after {
  transform: rotate(-45deg);
}

// @media only screen and (max-width: 960px) {
//   .content-container {
//     margin-left: 14px;
//     margin-right: 14px;
//   }
// }

// @media only screen and (max-width: 600px) {
//   .content-container {
//     margin-left: 14px;
//     margin-right: 14px;
//     margin-bottom: 20px;
//   }
//   .top-image {
//     margin-bottom: 40px;
//   }
// }
</style>
