<template>
  <div class="pagination-button-section">
    <nuxt-link :to="$i18n.path(link)" class="more-posts-button">
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Więcej',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-button-section {
  margin-top: 120px;
  text-align: center;
}
.more-posts-button {
  text-transform: uppercase;
  border-radius: 26px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5rem 3rem;
  color: var(--more-content-button-text-color);
  font-size: 12px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(200deg, #2d4adb, #f84569);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px var(--more-content-button-background-color) inset;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid transparent;
    letter-spacing: 2px;
    background-image: none;
    transition: all 0.2s ease;
  }
}

@media only screen and (max-width: 600px) {
  .pagination-button-section {
    margin-top: 60px;
  }
  .more-posts-button {
    padding: 0.5rem 2rem;
  }
}
</style>
