<template>
  <div>
    <toolbar-header-component />

    <div style="padding-top: 64px;">
      <Nuxt />
    </div>

    <footer-component />
  </div>
</template>

<script>
import ToolbarHeaderComponent from '@/components/toolbar-header'
import FooterComponent from '@/components/footer'

export default {
  components: {
    ToolbarHeaderComponent,
    FooterComponent,
  },
}
</script>

<style lang="scss">
@import '../assets/styles/fonts.scss';

$scrollbar-track-color: #f4f4f4;
$scrollbar-thumb-color: #bfbfbf;

::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: $scrollbar-track-color;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: $scrollbar-thumb-color;
}

*,
*::before,
*::after {
  // box-sizing: border-box;
  // margin: 0;
}
</style>
