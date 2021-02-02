<template>
  <div class="social-section">
    <div class="social-icons-container">
      <template v-for="(item, index) in links">
        <div :key="item.id" class="social-item">
          <a :href="item.href" target="_blank" rel="noopener noreferrer">
            {{ item.name }}
          </a>
        </div>
        <div
          v-if="index < links.length - 1"
          :key="item.id"
          class="social-line"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/jakubgania',
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/jakubgania',
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/jakubgania',
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.social-section {
  margin-top: 100px;
  margin-bottom: 100px;
}
.social-icons-container {
  display: flex;
  flex-wrap: wrap;
}
.social-item {
  width: 24%;
  text-align: center;
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text);
  transition: letter-spacing 0.2s ease;

  &:hover {
    transition: letter-spacing 0.2s ease;
    letter-spacing: 3px;
    color: #f30;
  }
}
.social-line {
  border-right: 2px solid var(--color-text);
  transform: skewX(-30deg);
}

@media screen and (max-width: 600px) {
  .social-section {
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
</style>
