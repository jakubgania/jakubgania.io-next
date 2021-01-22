<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path="shortcuts"
      parent-page-title="Shortcuts"
      :child-page-title="data.name"
      :max-width-wrapper="1000"
    />
    <div class="title-section">
      <h2>
        {{ data.name }}
      </h2>
    </div>
    <div class="top-description">
      <p>
        {{ data.description }}
      </p>
    </div>
    <div class="source-section">
      <span class="source-section-title">
        Source:
      </span>
      <a
        :href="data.source[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="source-link"
      >
        {{ data.source[0].url }}
      </a>
    </div>
    <div class="table-section">
      <div v-for="item in data.items" :key="item.id">
        <div class="section-title">
          {{ item.sectionName }}
        </div>
        <table style="width: 100%;">
          <tbody>
            <tr
              v-for="shrt in item.data"
              :key="shrt.id"
              class="shortcut-item-section"
            >
              <td class="table-shortcut-section">
                <div class="shortcut-keys">
                  {{ shrt.shortcut }}
                </div>
              </td>
              <td class="table-description-section">
                <div class="shortcut-description">
                  {{ shrt.description }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="other-shortcuts-section-title">
      <h4 style="font-weight: 700;">
        Other shortcuts
      </h4>
    </div>
    <div class="other-shortcuts-section">
      <ul class="links-section">
        <li v-for="item in shortcuts" :key="item.id" class="link-text">
          <template v-if="item.title != data.name">
            <nuxt-link :to="`/shortcuts` + item.path">
              <span>
                {{ item.title }}
              </span>
            </nuxt-link>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import shortcutsList from '../../../json/list-of-shortcuts.json'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  async asyncData({ params }) {
    const data = await import(`~/json/${params.slug}.json`)
    return {
      data,
    }
  },
  data() {
    return {
      shortcuts: shortcutsList.data,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software | Shortcuts - ' + this.data.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.description,
        },
        {
          name: 'keywords',
          content: '',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.data.name + ' | Jakub Gania Software',
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Jakub Gania Software',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/' + this.$route.path,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Shortcuts - ' + this.data.name,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.title-section {
  margin-bottom: 40px;
}
.top-description {
  margin-bottom: 80px;
}
.source-section {
  margin-bottom: 80px;
  display: inline-grid;
}
.source-section-title {
  font-weight: 700;
  font-size: 14px;
}
.source-link {
  font-size: 14px;
  color: #0fc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.table-section {
  width: 100%;
  margin-bottom: 80px;
}
.shortcut-item-section {
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;

  &:nth-child(odd) {
    background-color: #f0f0f5;
  }
}
.table-shortcut-section {
  width: 40%;
}
.table-description-section {
  width: 60%;
}
.shortcut-keys {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 10px;
}
.shortcut-description {
  padding-top: 10px;
  padding-bottom: 10px;
}
.section-title {
  font-size: 18px;
  letter-spacing: 1px;
  padding-top: 40px;
  padding-bottom: 20px;
  font-weight: 700;
}
.links-section {
  margin-bottom: 100px;
}
.link-text {
  margin-top: 14px;
  margin-bottom: 14px;
}
.other-shortcuts-section-title {
  margin-bottom: 40px;
}

@media only screen and (max-width: 1040px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
