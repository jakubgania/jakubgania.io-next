<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Galeria"
    />
    Strona w przygotowaniu.
    <div v-if="fullScreenImage" class="full-screen-image-wrapper">
      <div class="toolbar">
        <button class="close-button" @click="closeFullScreenImage()">
          <div class="close-icon" />
        </button>
      </div>
      <img :src="fullImageUrl" alt="" class="full-screen-image" />
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-1 images-container">
      <div
        v-for="item in images"
        :key="item.id"
        class="image-item"
        :style="`background-image: url(${item.url})`"
        @click="showFullScreenImage(item.url)"
      />
    </div>
  </div>
</template>

<script>
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      fullScreenImage: false,
      fullImageUrl: null,
      images: [
        {
          name: '',
          url:
            'https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/20190222_175234.jpg',
        },
        {
          name: '',
          url:
            'https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/20190721_054754.jpg',
        },
        {
          name: '',
          url:
            'https://s3.eu-central-1.amazonaws.com/jakubgania.io-gallery/20190824_170039.jpg',
        },
      ],
      head: {
        description: 'Galeria zdjęć',
        keywords: 'galeria, zdjęcia, fotografie, grafiki, obrazki',
      },
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
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software | Galeria',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Galeria zdjęć.',
        },
        {
          name: 'keywords',
          content: this.head.keywords,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.head.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
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
  background-position: center;
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
  width: 32px;
  height: 32px;
  opacity: 0.6;
  color: white;
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
  width: 2px;
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
.toolbar {
  position: absolute;
  top: 0;
  z-index: 99;
  // pointer-events: none;
  height: 60px;
  padding: 0 0 16px 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65) 0%,
    transparent 100%
  );
}

@media only screen and (max-width: 600px) {
  .top-section-title {
    margin-bottom: 10px;
    padding-top: 20px;
    margin-left: 10px;
  }
}
</style>
