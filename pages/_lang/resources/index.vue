<template>
  <div class="content-container">
    <div class="title-category">
      Kategorie
    </div>

    <div v-for="item in linksData" :key="item.id">
      <a :href="'#' + item.section_id" style="text-decoration: none;">
        <div class="listing-link">
          {{ $t(item.section_name) }}
        </div>
      </a>
    </div>

    <div v-for="item in linksData" :key="item.id" class="link-section">
      <div :id="item.section_id" class="link-section-title">
        {{ $t(item.section_name) }}
      </div>
      <div
        v-for="(resource, index) in item.resource_addresses"
        :key="resource.id"
        class="link-item"
      >
        <div>
          <a :href="resource.url" target="_blank" class="link-resource">
            {{
              resource.title
                ? index + 1 + '. ' + resource.title
                : index + 1 + '. ' + resource.url
            }}
          </a>
        </div>
        <div v-if="resource.description">
          <div class="resource-description">
            {{ resource.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from '@/json/resources-items'

export default {
  data() {
    return {
      title: '',
      linksData: jsonData.resources_items,
    }
  },
  mounted() {
    console.log('json data ', jsonData)

    for (const item of jsonData.resources_items) {
      console.log('item ', item.resource_addresses)
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Zasoby',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zasoby',
        },
        {
          name: 'keywords',
          content:
            'programy, strony, portale, portale technologiczne, portale programistyczne, dokumentacje, projekty, blogi, artykuły, kanały youtube',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-bottom: 100px;
}
.title-category {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 14px;
  letter-spacing: 2px;
}
.listing-link {
  color: #1a8cff;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 8px;

  &:hover {
    color: #ff6b00;
  }
}
.link-section {
  margin-bottom: 24px;
}
.link-section-title {
  font-size: 20px;
  font-weight: 800;
  padding-top: 20px;
  padding-bottom: 20px;
  letter-spacing: 4px;
  border-top: 1px solid #d9d9d9;
}
.link-resource {
  color: #1a8cff;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.5px;

  &:hover {
    color: #01aca7;
  }
}
.resource-description {
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: 1px;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .link-section-title {
    font-size: 18px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .link-item {
    padding-top: 2px;
    padding-bottom: 2px;
  }
}
</style>
