<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Galeria"
    />
    <div v-if="fullScreenImage" class="full-screen-image-wrapper">
      <button class="close-button" @click="closeFullScreenImage()">
        <div class="close-icon" />
      </button>
      <img :src="fullImageUrl" alt="" class="full-screen-image" />
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-1 images-container">
      <div
        v-for="index in 12"
        :key="index"
        class="image-item"
        :style="`background-image: url(${ImageKeyboardHome})`"
        @click="showFullScreenImage(ImageKeyboardHome)"
      />
    </div>
  </div>
</template>

<script>
import ImageKeyboardHome from '../../../assets/images/keyboard-light-webp.webp'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      ImageKeyboardHome,
      fullScreenImage: false,
      fullImageUrl: null,
    }
  },
  methods: {
    showFullScreenImage(param) {
      this.fullScreenImage = !this.fullScreenImage
      this.fullImageUrl = param

      if (this.fullScreenImage) {
        document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('html')[0].style.overflow = 'auto'
      }
    },
    closeFullScreenImage() {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      this.fullScreenImage = false
      this.fullImageUrl = false
    },
  },
  head() {
    return {
      title: 'Jakub Gania Software | Galeria',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1000px;
  width: 100%;
  margin: auto;
}
.top-section-title {
  max-width: 1000px;
  // text-align: center;
  margin-bottom: 10px;
  padding-top: 80px;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
  font-style: normal;
  font-size: 10px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 4px;
}
.images-container {
  margin-top: 100px;
  margin-bottom: 200px;
}
.image-item {
  padding-top: 100%;
  background-color: #f2f2f2;
}
.full-screen-image-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.9);
  z-index: 9999;
}
.close-icon {
  position: absolute;
  right: 24px;
  // top: 50%;
  width: 32px;
  height: 32px;
  opacity: 0.6;
  color: white;
  // color: var(--navigation-drawer-close-button-color);
}
.close-icon:hover {
  opacity: 1;
}
.close-icon::before,
.close-icon::after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 1px;
  background-color: white;
}
.close-icon::before {
  transform: rotate(45deg);
}
.close-icon::after {
  transform: rotate(-45deg);
}
.full-screen-image {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
}
@media only screen and (max-width: 600px) {
  .top-section-title {
    margin-bottom: 10px;
    padding-top: 20px;
    margin-left: 10px;
  }
}
</style>
