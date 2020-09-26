<template>
  <div :class="classes.wrap">
    <div :class="classes.base">
      <div :class="classes.head">
        <div :class="classes.tags">
          tags
        </div>
      </div>
      <div class="flex flex-col flex-grow">
        <div :class="classes.info.header">
          <a
            :href="repoLink"
            target="_blank"
            rel="noopener noreferrer"
            class="transition duration-200 text-gray-20 hover:text-gray-10"
          >
            {{ repoName }}
          </a>
        </div>
        <div class="flex-grow px-4 text-sm text-gray-30">
          {{ repoData.description ? repoData.description : 'No description' }}
        </div>
        <div
          class="w-6 my-3 ml-4 border border-l-0 border-r-0 rounded border-gray-70"
        />
        <div class="px-4 pb-3" style="display: grid;">
          <div
            style="display: inline-flex; line-height: 12px; margin-bottom: 6px;"
          >
            <icon-component :path="mdiMessageProcessingOutline" :size="14" />
            <div
              class="w-full truncate"
              style="font-size: 12px; margin-left: 10px; letter-spacing: 0.4px;"
            >
              {{ lastCommitMsg }}
            </div>
          </div>
          <div
            style="display: inline-flex; line-height: 12px; margin-bottom: 6px;"
          >
            <icon-component :path="mdiClockTimeFiveOutline" :size="14" />
            <div
              style="font-size: 12px; margin-left: 10px; letter-spacing: 0.4px;"
            >
              {{ lastCommitTime }}
              <span class="text-gray-50">on</span>
              {{ ' ' }}
              {{ lastCommitBranch }}
              <div v-if="lastCommitTime.match(/[ms]/) && false">
                <span role="img" aria-label="sparkles emoji">
                  {{ ' ' }}
                  ✨️
                </span>
              </div>
            </div>
          </div>
          <div
            style="display: inline-flex; line-height: 12px; margin-bottom: 6px;"
          >
            <icon-component :path="mdiConsole" :size="14" />
            <div
              style="font-size: 12px; margin-left: 10px; letter-spacing: 0.4px;"
            >
              {{ commitCount }} commits <span class="text-gray-50">on</span>
              {{ ' ' }}
              {{ branchCount }} {{ branchCount > 1 ? 'branches' : 'branch' }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="classes.buttons.base">
      <template v-if="demoLink">
        <a
          :href="repoLink"
          target="_blank"
          rel="noopener noreferrer"
          :class="classes.buttons.btn + ' ' + classes.buttons.left"
        >
          GITHUB
        </a>
        <a
          :href="demoLink"
          target="_blank"
          rel="noopener noreferrer"
          :class="classes.buttons.btn + ' ' + classes.buttons.right"
        >
          LIVE SITE
        </a>
      </template>
      <template v-else>
        <a
          :href="repoLink"
          target="_blank"
          rel="noopener noreferrer"
          :class="classes.buttons.btn + ' ' + classes.buttons.only"
        >
          GITHUB
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {
  mdiMessageProcessingOutline,
  mdiClockTimeFiveOutline,
  mdiConsole,
} from '@mdi/js'
import IconComponent from '../../components/icon'

export default {
  props: {
    repoData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    useImage: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    'icon-component': IconComponent,
  },
  data() {
    return {
      classes: {
        wrap: 'shadow h-full flex flex-col',
        base:
          'bg-gray-90 rounded-lg rounded-b-none overflow-hidden flex-grow flex flex-col',
        head: 'flex flex-col justify-between text-gray-30 bg-gray-80',
        lastCommit: 'text-xs pt-1',
        tags: 'flex flex-row flex-wrap-reverse justyfy-center pt-4 pb-2',
        info: {
          base: 'pb-4',
          header: 'mt-4 pl-4 font-medium tracking-wider mb-1 truncate',
          description: 'px-4 text-xs text-gray-10 flex-grow',
          stats:
            'flex flex-col justify-center pl-4 border-l border-solid border-gray-100 text-gray-30 px-4',
          stat: 'monospace text-xs',
        },
        buttons: {
          base: 'grid grid-cols-2 gap-2px text-xs font-bold uppercase',
          icon: 'h-3 w-3 mr-1',
          btn:
            'tracking-wide flex justify-center items-center uppercase font-bold p-1 bg-gray-70 hover:bg-gray-60 hover:text-white border-2 border-transparent focus:outline-none focus:border-gray-10 transition duration-200',
          left: 'rounded rounded-t-none rounded-r-none',
          right:
            'bg-blue-70 rounded rounded-t-none rounded-l-none hover:bg-blue-60',
          only: 'rounded rounded-t-none col-span-2',
        },
      },
      topics: null,
      repoLink: null,
      repoName: null,
      recentRef: null,
      lastCommitMsg: null,
      lastCommitTime: null,
      lastCommitBranch: null,
      commitCount: null,
      branchCount: null,
      demoLink: null,
      mdiMessageProcessingOutline,
      mdiClockTimeFiveOutline,
      mdiConsole,
    }
  },
  created() {
    console.log('data in card component ', this.repoData)
    this.topics = this.repoData.repositoryTopics.edges.map(
      (e) => e.node.topic.name
    )
    console.log('topics ', this.topics)
    this.repoLink = this.repoData.url
    this.repoName = this.repoData.name.includes('frontend')
      ? this.repoData.name
          .replace('frontend', '(frontend)')
          .split('-')
          .join(' ')
      : this.repoData.name.split('-').join(' ')

    this.recentRef = this.repoData.refs.nodes
      .concat()
      .sort((a, b) => (a.target.pushDate < b.target.pushDate ? 1 : -1))[0]
    console.log('recent ref ', this.recentRef)
    this.lastCommitMsg = this.recentRef.target.messageHeadline
    console.log('last commit time - before ', this.recentRef.target.pushDate)
    this.lastCommitTime = moment(this.recentRef.target.pushDate).fromNow()
    console.log('last commit time ', this.lastCommitTime)
    this.lastCommitBranch = this.recentRef.name
    this.commitCount = this.repoData.refs.nodes.reduce(
      (acc, curr) => acc + curr.target.history.totalCount,
      0
    )
    this.branchCount = this.repoData.refs.nodes.length
    this.demoLink = this.repoData.homepageUrl
  },
}
</script>
