<template>
  <div class="blog-section-wrapper">
    <div class="blog-section-container">
      <div class="blog-section-title">
        <h2 v-text="'BLOG'" />
      </div>
      <div style="text-align: center; margin-bottom: 60px; margin-top: -50px;">
        <span class="number-of-posts" v-text="`| posty - ${numberOfPosts} |`" />
      </div>
      <div>
        <ul>
          <li v-for="post of posts" :key="post.slug" class="post-link-item">
            <nuxt-link :to="$i18n.path('post/' + post.slug)" class="post-link">
              <div class="blog-posts-container">
                <div class="mobile-xs-a">
                  <div class="post-main-title">
                    <div class="post-title">
                      {{ post.title }}
                    </div>
                  </div>
                  <div class="creation-date">
                    <IconComponent
                      :path="mdiClockOutline"
                      :size="12"
                      :color="'#b3b3b3'"
                    />
                    <span style="margin-left: 4px; margin-right: 4px;">
                      {{ post.creationDate + ' | ' }}
                    </span>
                    <IconComponent
                      :path="mdiTrendingUp"
                      :size="12"
                      :color="'#b3b3b3'"
                    />
                    <span style="margin-left: 6px;">
                      {{ '186' }}
                    </span>
                  </div>
                </div>
                <div class="image-section">
                  <div class="image-container-er">
                    <div
                      class="img-wrap-blog"
                      :style="`background-image: url(${post.thumbnail})`"
                    ></div>
                  </div>
                </div>
                <div class="blog-post-item-eer4">
                  <div class="mobile-xs-b">
                    <div class="post-main-title">
                      <div class="post-title">
                        {{ post.title }}
                      </div>
                    </div>
                    <div class="creation-date">
                      <IconComponent
                        :path="mdiClockOutline"
                        :size="12"
                        :color="'#b3b3b3'"
                      />
                      <span style="margin-left: 4px; margin-right: 4px;">
                        {{ post.creationDate + ' | ' }}
                      </span>
                      <IconComponent
                        :path="mdiTrendingUp"
                        :size="12"
                        :color="'#b3b3b3'"
                      />
                      <span style="margin-left: 6px;">
                        <template v-if="views.length > 0">
                          {{
                            (views &&
                              views.find(({ slug }) => slug === post.slug)
                                .postViewCounter) ||
                            '0'
                          }}
                        </template>
                      </span>
                    </div>
                  </div>
                  <div class="description-section">
                    {{ post.description }}
                  </div>
                </div>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <MoreContentButtonComponent
        :text="$t('moreContentButton.morePosts')"
        :link="'blog'"
      />
    </div>
  </div>
</template>

<script>
import { mdiClockOutline, mdiTrendingUp } from '@mdi/js'
import MoreContentButtonComponent from '../../components/MoreContentButton'
import IconComponent from '../../components/Icon'

export default {
  components: {
    MoreContentButtonComponent,
    IconComponent,
  },
  props: {
    posts: {
      type: Array,
      default: () => {
        return {}
      },
    },
    numberOfPosts: {
      type: Number,
      default: 0,
    },
    views: {
      type: Array,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      mdiClockOutline,
      mdiTrendingUp,
    }
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
  // font-family: 'Roboto Mono', monospace;

  &:hover {
    .img-wrap-blog {
      transform: scale(1.1);
    }
  }
}
.blog-post-item-eer4 {
  width: 60%;
  padding-left: 24px;
}
.post-main-title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.4px;
  display: flex;
  padding-bottom: 4px;
  color: var(--home-page-blog-section-post-title-color);
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */
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
  line-height: 1;
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
  color: #b3b3b3;
  padding-top: 4px;
  display: flex;
  line-height: 1;
  margin-bottom: 8px;
}
.image-section {
  width: 40%;
}
.image-container {
  background-color: #f2f2f2;
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
.number-of-posts {
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  color: var(--color-text);
}
.mobile-xs-a {
  display: none;
}
.mobile-xs-b {
  display: inherit;
}

@media only screen and (max-width: 960px) {
  .blog-section-container {
    padding-left: 10px;
    padding-right: 10px;
  }
  .post-main-title {
    font-size: 18px;
  }
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
  .mobile-xs-a {
    display: block;
  }
  .mobile-xs-b {
    display: none;
  }
}
</style>
