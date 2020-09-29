<template>
  <div :class="tagWrap">
    <div class="flex-grow px-2">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      tagWrap: null,
    }
  },
  methods: {
    generatorTagWrap(name) {
      const classnames = [
        'flex flex-row items-center rounded text-xs shadow-md overflow-hidden transition duration-200 select-none mb-2 mr-2',
      ]

      const baseColor = 'bg-gray-70 text-gray-20'
      const specialNames = [
        {
          name: 'javascript',
          classes: 'bg-purple-70 text-purple-20',
        },
        {
          name: 'typescript',
          classes: 'bg-pink-70 text-pink-20',
        },
        {
          name: 'react',
          classes: 'bg-yellow text-red-90',
        },
        {
          name: 'graphql',
          classes: 'bg-teal-70 text-teal-20',
        },
        {
          name: 'pwa',
          classes: 'bg-purple-70 text-purple-20',
        },
        {
          name: 'express',
          classes: 'bg-red-70 text-red-20',
        },
        {
          name: 'nodejs',
          classes: 'bg-orange text-red-90',
        },
        {
          name: 'axios',
          classes: 'bg-cyan-70 text-cyan-20',
        },
      ]

      const idx = specialNames.findIndex((o) => o.name === name.toLowerCase())

      if (idx >= 0) {
        classnames.push(specialNames[idx].classes)
      } else {
        classnames.push(baseColor)
      }

      return classnames.join(' ')
    },
  },
  created() {
    this.tagWrap = this.generatorTagWrap(this.name)
  },
}
</script>
