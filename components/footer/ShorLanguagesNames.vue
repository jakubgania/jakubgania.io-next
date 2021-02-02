<template>
  <div class="short-language-names">
    <div v-if="$store.state.locale === 'pl'">
      <nuxt-link to="/de">DE</nuxt-link>
      <nuxt-link to="/en">EN</nuxt-link>
    </div>
    <div v-if="$store.state.locale === 'de'">
      <nuxt-link to="/">PL</nuxt-link>
      <nuxt-link to="/en">EN</nuxt-link>
    </div>
    <div v-if="$store.state.locale === 'en'">
      <nuxt-link to="/">PL</nuxt-link>
      <nuxt-link to="/de">DE</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.light-mode {
  --footer-text-color: #000;
}
.dark-mode {
  --footer-text-color: #fff;
}
</style>

<style lang="scss" scoped>
.short-language-names {
  color: var(--footer-text-color);
  margin-left: 10px;
  margin-top: 20px;
  font-size: 12px;
}
</style>
