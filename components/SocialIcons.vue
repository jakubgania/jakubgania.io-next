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
      <IconComponent
        :path="item.icon"
        :size="item.size"
        :color="'--social-icons-componet-icon-color'"
        :var="true"
      />
    </a>
  </div>
</template>

<script>
import { mdiGithub, mdiTwitter, mdiYoutube } from '@mdi/js'
import IconComponent from '@/components/Icon'

export default {
  components: {
    IconComponent,
  },
  data() {
    return {
      data: [
        {
          link: 'https://github.com/jakubgania',
          icon: mdiGithub,
          size: 24,
        },
        {
          link: 'https://pl.linkedin.com/in/jakubgania',
          icon:
            'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
          size: 20,
        },
        {
          link: 'https://twitter.com/jakubgania',
          icon: mdiTwitter,
          size: 24,
        },
        {
          link: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
          icon: mdiYoutube,
          size: 24,
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
  border-top: 1px solid #f2f2f2;
  padding-top: 14px;
}
.social-icon {
  &:hover {
    transform: scale(1.1);
  }
}
</style>
