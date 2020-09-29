<template>
  <div class="mt-8">
    <h2 class="flex flex-col items-baseline py-2 text-xl font-bold md:flex-row">
      Recent Activity
      <div class="text-sm font-normal text-gray-30 md:ml-2">
        (last commit {{ lastCommitTime }} {{ ' ' }})
        <span
          v-if="false && lastCommitTime.match(/[ms]/)"
          role="img"
          aria-label="sparkles emoij"
        >
          {{ ' ' }} ✨️
        </span>
      </div>
    </h2>
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
      <template v-for="item in repositories">
        <card-component
          :key="item.node.name"
          :repoData="item.node"
          :useImage="true"
        />
      </template>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CardComponent from './Card'

export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  components: {
    'card-component': CardComponent,
  },
  data() {
    return {
      lastCommitTime: null,
      repositories: null,
    }
  },
  created() {
    this.lastCommitTime = moment(
      this.data.viewer.repositories.edges.concat().reverse()[0].node.pushedAt
    ).fromNow()

    this.repositories = this.data.viewer.repositories.edges
  },
}
</script>
