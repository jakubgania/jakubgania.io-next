<template>
  <div>
    <h2 class="flex flex-col items-baseline py-2 text-xl font-bold md:flex-row">
      Featured Projects
      <div class="text-sm font-normal text-gray-30 md:ml-2">
        (last commit {{ lastCommitTime }})
      </div>
    </h2>
    <div class="grid-grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- lodaing component -->
      card component
    </div>
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
      featuredRepoList: [],
    }
  },
  created() {
    this.data.viewer.pinnedItems.edges
      .map((n) => n.node)
      .concat()
      .sort((a, b) => (a.pushedAt < b.pushedAt ? 1 : -1))
      .forEach((r) => this.featuredRepoList.push(r))

    this.lastCommitTime =
      this.data && moment(this.featuredRepoList[0].pushedAt).fromNow()
  },
  mounted() {
    console.log('data ', this.featuredRepoList[0])
  },
}
</script>
