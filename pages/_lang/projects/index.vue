<template>
  <div>
    <h1>test</h1>
    <h2>test</h2>
    <ul>
      <li v-for="project of projects" :key="project.slug">
        <nuxt-link
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
        >
          <h2>
            {{ project.title }}
          </h2>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .only(['title', 'description', 'slug'])
      .fetch()

    return {
      projects,
    }
  },
  head() {
    return {
      title: 'Jakub Gania Software | Projekty',
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
