<template>
  <svg style="width: 224px; height: 224px;" viewBox="0 0 24 24">
    <path :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    }
  }
}
</script>

// add size and color settings