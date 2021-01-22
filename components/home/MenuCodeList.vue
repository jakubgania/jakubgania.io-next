<template>
  <div class="content-container-terminal">
    <div class="terminal">
      <div class="terminal-top-bar">
        <div
          class="card-item"
          :class="{ activ: view == 'vue' }"
          @click="tabView('vue')"
        >
          <div class="card-item__vue"></div>
          menu.vue
          <div class="card-item__close" />
        </div>
        <div
          class="card-item"
          :class="{ activ: view == 'json' }"
          @click="tabView('json')"
        >
          <span class="card-item__json">
            {...}
          </span>
          data.json
          <div class="card-item__close" />
        </div>
      </div>
      <div class="terminal-content">
        <div v-show="view == 'vue'">
          <div style="margin-top: 20px; letter-spacing: 1px;">
            <span style="color: #4d4dff; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                1
              </span>
              &nbsp;&nbsp;data
            </span>
            <span style="color: #c3f; font-weight: 600;">
              ()
            </span>
            <span style="color: #c3f; font-weight: 600;">
              {
            </span>
          </div>
          <div style="letter-spacing: 1px;">
            <span style="color: #69f; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                2
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
            </span>
            <span style="color: #69f; font-weight: 600;">
              {
            </span>
          </div>
          <div>
            <div style="letter-spacing: 1px; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                3
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items:
              <span style="color: orange;">[</span>
            </div>
          </div>

          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="link-section"
            style="font-weight: 600; letter-spacing: 1px;"
          >
            <template v-if="item.path">
              <nuxt-link :to="$i18n.path(item.path)" class="link">
                <div class="link-x">
                  <template v-if="index * 3 + 1 < 10">
                    &nbsp;
                  </template>
                  <span class="number-line">
                    {{ index * 3 + 1 }}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="xpo" style="color: #c3f;">
                    {
                  </span>
                </div>
                <div class="">
                  <template v-if="index * 3 + 2 < 10">
                    &nbsp;
                  </template>
                  <span class="number-line">
                    {{ index * 3 + 2 }}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="link-text xpo" style="color: #8c8c8c;">
                    page:
                  </span>
                  <span class="link-text">' {{ $t(item.name) }} '</span>
                </div>
                <div class="link-x">
                  <template v-if="index * 3 + 3 < 10">
                    &nbsp;
                  </template>
                  <span class="number-line">{{ index * 3 + 3 }}</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <span class="link-text">"'" {{ $t(item.name) }} "'"</span>
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
          </div>

          <div>
            <span class="number-line" style="font-weight: 600;">
              28
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style="color: orange; font-weight: 600;">
              ]
            </span>
          </div>
          <div>
            <span class="number-line" style="font-weight: 600;">
              29
            </span>
            &nbsp;&nbsp;
            <span style="color: #69f; font-weight: 600;">
              &nbsp;&nbsp;&nbsp;&nbsp;}
            </span>
          </div>
          <div>
            <span class="number-line" style="font-weight: 600;">
              30
            </span>
            &nbsp;&nbsp;
            <span style="color: #c3f; font-weight: 600;">
              }
            </span>
          </div>
        </div>
        <div v-show="view == 'json'">
          <div style="margin-top: 20px; letter-spacing: 1px;">
            <span style="color: #4d4dff; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                1
              </span>
              &nbsp;{
            </span>
          </div>
          <div style="letter-spacing: 1px;">
            <span style="color: #69f; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                2
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;"information":&nbsp;
            </span>
            <span style="color: #69f; font-weight: 600;">
              {
            </span>
          </div>
          <div>
            <div style="letter-spacing: 1px; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                3
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"author":&nbsp;
              <span class="span-color-json">
                "Jakub Gania"
              </span>
              ,
            </div>
          </div>
          <div>
            <div style="letter-spacing: 1px; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                4
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"project-name":&nbsp;
              <span class="span-color-json">
                "Jakub Gania Software"
              </span>
              ,
            </div>
          </div>
          <div>
            <div style="letter-spacing: 1px; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                5
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"project-type":&nbsp;
              <span class="span-color-json">
                "personal website"
              </span>
              ,
            </div>
          </div>
          <div>
            <div style="letter-spacing: 1px; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                6
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"domain":&nbsp;
              <span class="span-color-json">
                "jakubgania.io"
              </span>
            </div>
          </div>
          <div style="letter-spacing: 1px;">
            <span style="color: #4d4dff; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                7
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;}
            </span>
          </div>
          <div style="letter-spacing: 1px;">
            <span style="color: #4d4dff; font-weight: 600;">
              &nbsp;
              <span class="number-line">
                8
              </span>
              &nbsp;}
            </span>
          </div>
          <!-- <div>
            <div style="letter-spacing: 2px; font-weight: 600;">
              &nbsp;<span class="number-line">6</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"location"
            </div>
          </div>
          <div>
            <div style="letter-spacing: 2px; font-weight: 600;">
              &nbsp;<span class="number-line">6</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"techonologies"
            </div>
          </div> -->
        </div>
      </div>
      <div class="terminal-bottom-bar">
        <span class="bottom-bar-text">
          development
        </span>
        <span class="bottom-bar-text">
          <template v-if="view == 'vue'">
            Vue
          </template>
          <template v-if="view == 'json'">
            JSON
          </template>
        </span>
        <span class="bottom-bar-text">
          UTF-8
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import menuItems from '../../json/menu.json'

export default {
  data() {
    return {
      view: 'vue',
      items: menuItems.menu,
    }
  },
  methods: {
    tabView(value) {
      this.view = value
    },
  },
}
</script>

<style lang="scss" scoped>
.content-container-terminal {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 12.8px;
  // line-height: 1.28;
}
.link {
  text-decoration: none;
}
.link-text {
  color: var(--color-text);
  letter-spacing: 1.5px;
  font-size: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
  // font-weight: 500;
}
.link-text-dark-theme {
  color: #0fc;
}
.link-x {
  padding: 0;
  letter-spacing: 1px;
}
.number-line {
  color: #d9d9d9;
  font-family: 'Roboto Mono', monospace;
  font-size: 14.8px;
}
.link-section:hover {
  background-color: var(--menu-code-list-hover-bg-color);
  padding-left: 12px;

  .number-line {
    margin-left: -12px;
  }

  .xpo {
    padding-left: 12px;
    transition: padding-left 0.2s ease;
  }

  .link-text-dark-theme {
    color: #000;
  }
}
.comma {
  color: #69f;
}
.comma-not {
  display: none;
}
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
.terminal {
  width: 100%;
  // max-width: 600px;
  // height: 140px;
  // padding-top: 3rem;
  border-radius: 20px;
  background-image: url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fillRule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="%23FF5F56" stroke="%23E0443E" strokeWidth=".5" /><circle cx="26" cy="6" r="6" fill="%23FFBD2E" stroke="%23DEA123" strokeWidth=".5" /><circle cx="46" cy="6" r="6" fill="%2327C93F" stroke="%231AAB29" strokeWidth=".5" /></g></svg>');
  background-repeat: no-repeat;
  background-position: 16px 14px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: #fff;
  // padding-bottom: 10px;
  // padding-left: 10px;
  // padding-right: 10px;
  // position: fixed;
  // bottom: 130px;
  left: 50%;
  // transform: translate(-50%, -50%);
  margin-bottom: 4px;
  z-index: 20;
  pointer-events: auto;
}
.terminal-top-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #f2f2f2;
  display: inline-flex;
}
.card-item {
  font-weight: 500;
  background-color: #f2f2f2;
  width: fit-content;
  padding-left: 20px;
  padding-right: 30px;
  cursor: pointer;

  &:first-child {
    margin-left: 85px;
  }

  &:nth-child(2) {
    border-left: 2px solid #fff;
  }

  // & span {
  // }

  &__vue {
    background-image: url(../../assets/images/vue-icon.png);
    background-size: cover;
    width: 14px;
    height: 12px;
    display: inline-block;
    margin-bottom: -2px;
    margin-right: 4px;
  }

  &__json {
    color: #ffb31a;
    margin-right: 4px;
  }

  &__close {
    position: relative;
    display: none;
    width: 15px;
    height: 15px;
    // opacity: 0.3;
    top: 12px;
    right: 3px;
    opacity: 1;
  }

  &__close::before,
  &__close::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: #333;
  }

  &__close::before {
    transform: rotate(45deg);
  }

  &__close::after {
    transform: rotate(-45deg);
  }

  &:hover & {
    &__close {
      display: inline;
    }
  }
}
.activ {
  background-color: #dbdbdb;
}
.terminal-content {
  // padding-top: 3rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.span-color-json {
  color: #f93;
}
.terminal-bottom-bar {
  background-color: #267aff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 30px;
  line-height: 30px;
  padding-left: 18px;
  padding-right: 18px;
}
.bottom-bar-text {
  color: #fff;
  letter-spacing: 0.4px;
  font-weight: 500;

  &:nth-child(2) {
    float: right;
    margin-left: 10px;
  }

  &:nth-child(3) {
    float: right;
  }
}

@media only screen and (max-width: 960px) {
  .content-container {
    // margin-left: 14px;
    // margin-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .top-image {
    margin-bottom: 40px;
  }
}
</style>
