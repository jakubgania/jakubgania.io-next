<template>
  <div>
    <h1>test</h1>
    <h2>test</h2>
    <ul>
      <li v-for="post of posts" :key="post.slug">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <!-- <nuxt-link :to="'/blog/' + post.slug"> -->
          <h2>
            {{ post.title }}
          </h2>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts', params.slug)
      .only(['title', 'description', 'slug'])
      .fetch()

    return {
      posts,
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Blog',
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
