<template>
  <div>
    <h2 class="flex flex-col items-baseline py-2 text-xl font-bold md:flex-row">
      Featured Projects
      <div class="text-sm font-normal text-gray-30 md:ml-2">
        (last commit {{ lastCommitTime }})
      </div>
    </h2>
    <div class="grid grid-cols-1 gap-2 lg:grid-cols-3">
      <!-- lodaing component -->
      <template v-for="item in featuredRepoList">
        <CardComponent :key="item.name" :repo-data="item" :use-image="true" />
      </template>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import CardComponent from './Card'

export default {
  components: {
    CardComponent,
  },
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
}
</script>
