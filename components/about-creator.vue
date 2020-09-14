<template>
  <div class="author-container">
    <div class="author-wrapper">
      <div class="author-image">
        <img :src="profileImage" alt="" />
      </div>
      <div class="author-description-section">
        <div class="author-fullname">
          {{ fullname }}
        </div>
        <div class="author-description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '@/assets/images/profile.jpg'

export default {
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
}
.author-description {
  font-size: 14px;
  letter-spacing: 0.4;
}
</style>
