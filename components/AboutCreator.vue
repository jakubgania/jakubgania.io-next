<template>
  <div class="author-container">
    <div class="author-wrapper">
      <div class="author-image">
        <img
          :src="profileImage"
          alt=""
          class="w-24 -mt-16 rounded-full shadow-xl"
          style="margin-top: 8px;"
        />
      </div>
      <div class="author-description-section">
        <div class="author-fullname">
          {{ fullname }}
        </div>
        <div class="author-description">
          {{ description }}
        </div>
        <div>
          <SocialIconsComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '@/assets/images/profile.jpg'
import SocialIconsComponent from '@/components/SocialIcons'

export default {
  components: {
    SocialIconsComponent,
  },
  data() {
    return {
      profileImage,
      fullname: 'Jakub Gania',
      description:
        'Kiedy tylko przyjdzie mi jakiś temat do głowy to staram się to opisać w formie postu na moim blogu. Zapraszam do zapoznania się z innymi postami oraz całą moją stroną. Staram się być również aktywny na Githubie i tworzyć różne projekty.',
    }
  },
}
</script>

<style lang="scss" scoped>
.author-container {
  max-width: 800px;
  margin: auto;
}
.author-wrapper {
  display: flex;
}
.author-image {
  width: 140px;
}
.author-description-section {
  width: calc(100% - 140px);
  padding-left: 40px;
}
.author-fullname {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
  padding-bottom: 10px;
  color: var(--author-component-text-color);
}
.author-description {
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid #f2f2f2;
  padding-top: 10px;
  color: var(--author-component-text-color);
}
@media only screen and (max-width: 600px) {
  .author-image {
    width: 100px;
  }
  .author-description-section {
    padding-left: 20px;
  }
  .author-description {
    font-size: 12px;
  }
}
</style>
