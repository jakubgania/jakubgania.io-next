<template>
  <svg
    :style="{ width: size + 'px', height: size + 'px', fill: color }"
    viewBox="0 0 24 24"
  >
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: '#000',
    },
  },
}
</script>

// add size and color settings
