<template>
  <svg :style="svgStyle" viewBox="0 0 24 24">
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
    var: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    svgStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        fill: this.var ? 'var(' + this.color + ')' : this.color,
      }
    },
  },
}
</script>

// add size and color settings
