<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="O mnie"
    />
    <div class="grid grid-rows-1 title-text">
      {{ aboutText }}
    </div>
    <div class="section-bottom-title">
      <div class="grid grid-cols-2 grid-flow-col">
        <div class="image-section">
          <img :src="profileImage" alt="" class="profile-image" />
        </div>
        <div class="information-section">
          <div>
            <h1 class="full-name">
              {{ fullname }}
            </h1>
            <div class="vertical-section">
              <span>
                about
              </span>
            </div>
            <div style="padding-left: 50px;">
              <div class="description">
                <p>
                  {{ description }}
                </p>
              </div>
              <div>
                icons section
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '../../../assets/images/profile.jpg'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      profileImage,
      aboutText: 'About',
      fullname: 'Jakub Gania',
      description:
        'Nazywam się Jakub Gania. Mieszkam we Wrocławiu. W 2018 roku uzyskałem tytuł inżyniera informatyki z specjalizacją inżyniera systemów informatycznych. Specjalizuję sie w technologiach webowych. Cały czas się uczę i poszerzam swoją wiedzę w różnych obszarach powiązanych z programowaniem. Moje projekty udostępniam na platformie GitHub. Rozwijam się w kierunku Full Stack Web Developer.',
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software | O mnie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Kilka zdań o mnie',
        },
        {
          name: 'keywords',
          content: 'o mnie, opis',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | O mnie',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Kilka zdań o mnie',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://jakubgania.io/jakub-gania-software-logo-img.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.content-container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  position: relative;
  z-index: 0;
  min-height: 100vh;
}
.section-bottom-title {
  margin-top: -180px;
}
.title-text {
  text-align: center;
  position: relative;
  z-index: -10;
  font-size: 280px;
  font-weight: 500;
  letter-spacing: 10px;
  color: #f2f2f2;
}
.title-text-dark-theme {
  color: #404040;
}
.image-section {
  text-align: center;
}
.profile-image {
  max-width: 80%;
  position: relative;
  z-index: 0;
}
.vertical-section {
  transform: translateX(-48%) rotate(90deg);
  max-width: 220px;
  width: 100%;
  letter-spacing: 10px;
  font-size: 12px;
  font-weight: 800;
  border-bottom: 2px solid #000;
  line-height: 0.01em;
  margin: 10px 0 20px;
  position: absolute;
  top: 525px;
}
.vertical-section span {
  background-color: #fff;
  padding: 0 10px;
  text-transform: uppercase;
}
.vertical-section-dark-theme {
  border-bottom: 2px solid #fff;
}
.vertical-section-dark-theme span {
  background-color: #1a1a1a;
}
.full-name {
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 4px;
}
.full-name-dark-theme {
  color: #fff;
}
.description {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 0.6px;
}
.description-dark-theme {
  color: #fff;
}
.icons-section {
  margin-top: 20px;
}
.link-button {
  float: left;
}

@media only screen and (max-width: 960px) {
  .section-bottom-title {
    margin-top: -160px;
  }
  .content-container {
    .title-text {
      font-size: 26vw;
    }
  }
  .profile-image {
    width: 100%;
  }
  .information-section {
    padding-left: 28px;
    padding-right: 28px;
  }
  .full-name {
    font-size: 44px;
  }
  .description {
    padding-top: 20px;
  }
}

@media only screen and (max-width: 600px) {
  .content-container {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
  .title-text {
    font-size: 100px;
    margin-top: 60px;
  }
  .section-bottom-title {
    margin-top: -90px;
  }
  .profile-image {
    max-width: 100%;
  }
  .full-name {
    font-size: 40px;
  }
  .vertical-section {
    top: 170px;
  }
}
</style>
