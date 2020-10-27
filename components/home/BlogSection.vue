<template>
  <div class="blog-section-wrapper">
    <div class="blog-section-container">
      <div class="blog-section-title">
        <h2 v-text="'BLOG'" />
      </div>
      <div>
        <ul>
          <li v-for="post of posts" :key="post.slug" class="post-link-item">
            <nuxt-link :to="$i18n.path('post/' + post.slug)" class="post-link">
              <div class="blog-posts-container">
                <div class="image-section">
                  <div class="image-container-er">
                    <div
                      class="img-wrap-blog"
                      :style="`background-image: url(${post.topImageSrc})`"
                    ></div>
                  </div>
                </div>
                <div class="blog-post-item-eer4">
                  <div class="post-main-title">
                    <div class="post-title">
                      {{ post.title }}
                    </div>
                  </div>
                  <div class="description-section">
                    {{ post.description }}
                  </div>
                  <div class="creation-date">
                    {{ post.creationDate + ' | ' + '218' }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <MoreContentButtonComponent :text="'Więcej postów'" :link="'blog'" />
    </div>
  </div>
</template>

<script>
import MoreContentButtonComponent from '../../components/MoreContentButton'

export default {
  components: {
    MoreContentButtonComponent,
  },
  props: {
    posts: {
      type: Array,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-section-wrapper {
  margin: auto;
}
.blog-section-container {
  max-width: 1600px;
  margin: auto;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 140px;
  padding-bottom: 140px;
}
.blog-section-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 80px;
  color: var(--home-page-blog-section-title-color);
}
.blog-posts-container {
  display: flex;
  flex-flow: wrap;
}
.image-container-er {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
  overflow: hidden;
}
.image-container-er::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.img-wrap-blog {
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
.post-link-item {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    .img-wrap-blog {
      transform: scale(1.1);
    }
  }
}
.blog-post-item-eer4 {
  width: 65%;
  padding-left: 24px;
}
.post-main-title {
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.4px;
  display: flex;
  padding-bottom: 4px;
  color: var(--home-page-blog-section-post-title-color);
}
.post-link {
  text-decoration: none;
  color: #000;

  &:hover {
    .post-main-title {
      color: #06f;
    }
  }
}
.post-title {
  font-size: 20px;
}
.description-section {
  font-size: 14px;
  padding-top: 4px;
  letter-spacing: 0.4px;
  padding-bottom: 10px;
  color: var(--home-page-blog-section-post-description);
}
.creation-date {
  text-align: left;
  font-size: 12px;
  letter-spacing: 1px;
  color: #8c8c8c;
  padding-top: 4px;
}
.image-section {
  width: 35%;
}
.image-container {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

@media only screen and (max-width: 600px) {
  .image-section {
    width: 100%;
  }
  .blog-section-container {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .blog-section-title h2 {
    font-size: 36px;
  }
  .blog-post-item-eer4 {
    padding-left: 0;
    width: 100%;
    margin-top: 20px;
  }
  .post-link-item {
    margin-bottom: 40px;
  }
  .post-title {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
