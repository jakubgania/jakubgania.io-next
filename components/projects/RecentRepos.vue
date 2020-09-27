<template>
  <div class="mt-8">
    <h2 class="flex flex-col items-baseline py-2 text-xl font-bold md:flex-row">
      Recent Activity
      <div class="text-sm font-normal text-gray-30 md:ml-2">
        last commit {{ lastCommitTime }} {{ ' ' }}
        <span
          v-if="true || true || 1 || true"
          role="img"
          aria-label="sparkles emoij"
        >
          {{ ' ' }} ✨️
        </span>
      </div>
    </h2>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      lastCommitTime: null,
    }
  },
  created() {
    this.lastCommitTime = moment(
      this.data.viewer.repositories.edges.concat().reverse()[0].node.pushedAt
    ).fromNow()
    // this
  },
}
</script>
