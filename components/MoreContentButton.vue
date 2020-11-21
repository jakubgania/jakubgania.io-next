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
  border-radius: 6px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 0.5rem 3rem;
  color: var(--more-content-button-text-color);
  font-size: 12px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #6a82fb, #fc5c7d);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px var(--more-content-button-background-color) inset;
  transition: all 0.2s ease;

  &:hover {
    border: 2px solid transparent;
    letter-spacing: 2.8px;
    background-image: none;
    transition: all 0.2s ease;
  }
}

@media only screen and (max-width: 600px) {
  .pagination-button-section {
    margin-top: 60px;
  }
}
</style>
