<template>
  <div class="section-icon-wrapper">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="social-icon"
    >
      <icon-component :path="item.icon" :size="24" />
    </a>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiYoutube } from '@mdi/js'
import IconComponent from '@/components/icon'

export default {
  components: {
    'icon-component': IconComponent,
  },
  data() {
    return {
      data: [
        {
          link: 'https://github.com/jakubgania',
          icon: mdiGithub,
        },
        {
          link: 'https://pl.linkedin.com/in/jakubgania',
          icon: mdiLinkedin,
        },
        {
          link: 'https://twitter.com/jakubgania',
          icon: mdiTwitter,
        },
        {
          link: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
          icon: mdiYoutube,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.section-icon-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
}
.social-icon {
  &:hover {
    transform: scale(1.1);
  }
}
</style>
