<template>
  <div class="images-section">
    <section class="imgages-section-wrapper">
      <div class="trending-grid-items">
        <nuxt-link :to="$i18n.path('blog')">
          <div class="trending-grid-item trending-item-1">
            <div
              class="img-wrap"
              :style="`background-image: url(${ImageBackgroundHome})`"
            ></div>
            <div class="img-inner">
              <header>
                <p
                  v-text="$t('home.gallerySection.blog')"
                  class="trending-post-title"
                />
              </header>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="$i18n.path('experience')">
          <div class="trending-grid-item trending-item-2">
            <div
              class="img-wrap"
              :style="`background-image: url(${ImageStickersHome})`"
            ></div>
            <div class="img-inner">
              <header>
                <p
                  v-text="$t('home.gallerySection.experience')"
                  class="trending-post-title"
                />
              </header>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="$i18n.path('contact')">
          <div class="trending-grid-item trending-item-3">
            <div
              class="img-wrap"
              :style="`background-image: url(${ImageKeyboardHome})`"
            ></div>
            <div class="img-inner">
              <header>
                <p
                  v-text="$t('home.gallerySection.contact')"
                  class="trending-post-title"
                />
              </header>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link :to="$i18n.path('gallery')">
          <div class="trending-grid-item trending-item-4">
            <div
              class="img-wrap"
              :style="`background-image: url(${ImageDottedWawesLight})`"
            ></div>
            <div class="img-inner">
              <header>
                <p
                  v-text="$t('home.gallerySection.gallery')"
                  class="trending-post-title"
                />
              </header>
            </div>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import ImageBackgroundHome from '../../assets/images/background-home.jpg'
import ImageStickersHome from '../../assets/images/stickers-home.jpg'
import ImageKeyboardHome from '../../assets/images/keyboard-home.jpeg'
import ImageDottedWawesLight from '../../assets/images/dotted-wawes-light.jpg'

export default {
  data() {
    return {
      ImageBackgroundHome,
      ImageStickersHome,
      ImageKeyboardHome,
      ImageDottedWawesLight,
    }
  },
}
</script>

<style lang="scss" scoped>
.images-section-wrapper {
  width: 100%;
}
.img-wrap {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.5s;
}
.trending-grid-items::after {
  content: '';
  display: table;
  clear: both;
}
.trending-grid-item {
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover {
    .img-wrap {
      transform: scale(1.1);
    }
  }
}
.trending-grid-item::before {
  height: 100%;
  position: relative;
  z-index: 2;
  pointer-events: none;
  // background: linear-gradient(
  //   to right,
  //   rgba(0, 0, 0, 0.75) 0,
  //   rgba(0, 102, 255, 0.4) 100%
  // );
  background: linear-gradient(
    -128deg,
    rgba(0, 102, 255, 0.6) 0,
    rgba(252, 92, 125, 0.6) 100%
  );
}
.trending-item-1 {
  width: 62%;
  background-color: #3f5efb;
  float: left;
  position: relative;
}
.trending-item-1::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 52%;
}
.trending-item-2 {
  width: 38%;
  background-color: cadetblue;
  position: relative;
  float: left;
}
.trending-item-2::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 45.58%;
}
.trending-item-3 {
  width: 19%;
  background-color: #fc466b;
  float: left;
  position: relative;
}
.trending-item-3::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 78.48101%;
}
.trending-item-4 {
  width: 19%;
  background-color: #8c8c8c;
  float: left;
  position: relative;
}
.trending-item-4::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 78.48101%;
}
.img-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.trending-post-title {
  font-size: 2em;
  color: #fff;
  line-height: 1.3em;
  font-weight: 500;
  margin: 0;
  // text-shadow: 1px 1px rgb(224, 185, 9);
  max-width: 100%;
}
.trending-grid-item header {
  display: block;
  float: none;
  bottom: 0;
  z-index: 3;
  position: absolute;
  padding: 2em 1.5em 1.5em 2em;
}
@media only screen and (max-width: 1100px) {
  .trending-item-1 {
    width: 50%;
  }
  .trending-item-1::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-2 {
    width: 50%;
  }
  .trending-item-2::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-3 {
    width: 50%;
  }
  .trending-item-3::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  .trending-item-4 {
    width: 50%;
  }
  .trending-item-4::before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
}
@media only screen and (max-width: 960px) {
  .trending-post-title {
    font-size: 1.8em;
  }
}
@media only screen and (max-width: 600px) {
  .trending-post-title {
    font-size: 16px;
  }
  .trending-grid-item header {
    padding: 2em 1.5em 1em 1em;
  }
  .trending-item-1::before {
    padding-top: 100%;
  }
  .trending-item-2::before {
    padding-top: 100%;
  }
  .trending-item-3::before {
    padding-top: 100%;
  }
  .trending-item-4::before {
    padding-top: 100%;
  }
}
</style>
