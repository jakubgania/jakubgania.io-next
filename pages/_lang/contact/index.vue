<template>
  <div class="grid grid-cols-1">
    <div class="content-container">
      <div class="left-section">
        <div class="image-exmp"></div>
      </div>
      <div class="right-section">
        <div class="right-section-container">
          <div class="title-x">
            Kontakt
          </div>
          contact@jakubgania.io
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jakub Gania Software | Kontakt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description',
        },
        {
          name: 'keywords',
          contact: 'Kontakt',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: inherit;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
}
.left-section {
  width: 50%;
  background-color: #000;
}
.title-x {
  font-size: 40px;
  margin-bottom: 24px;
  font-weight: 100;
}
.image-exmp {
  content: '';
  display: block;
  // position: absolute;
  top: 0;
  left: 0;
  background-image: url(../../../assets/images/background-index.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}
.right-section {
  width: 50%;
  position: relative;
}
.right-section-container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 10;
  padding: 14px;
  position: absolute;
  text-align: center;
  width: 360px;
}
.right-section-container::after {
  display: block;
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  top: -5px;
  right: -5px;
  border-top: 2px solid black;
  border-right: 2px solid black;
}
.right-section-container::before {
  display: block;
  content: '';
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: -5px;
  left: -5px;
  border-bottom: 2px solid black;
  border-left: 2px solid black;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
