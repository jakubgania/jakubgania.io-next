<template>
  <div class="top-section-container">
    <div class="top-section">
      <div class="mobile-version">
        <div style="display: flex;">
          <div class="img-section">
            <img :src="profileImage" alt="" class="profile-image" />
          </div>
          <div class="full-name">
            Jakub <br />
            Gania
          </div>
        </div>
      </div>
      <div class="img-section desktop-version">
        <img :src="profileImage" alt="" class="profile-image" />
      </div>
      <div class="personal-data-section">
        <!-- <div class="full-name desktop-version">
          {{ fullName }}
        </div> -->
        <div class="two-column xpoo" style="margin-top: -38px;">
          <div class="left-column">
            <div class="item-section-name text-item-fl">
              Jakub
            </div>
          </div>
          <div class="right-column">
            <div class="item-section-name text-item-fl">
              Gania
            </div>
          </div>
        </div>
        <div class="two-column" style="margin-top: 5px;">
          <p class="description-text">
            {{ desc }}
          </p>
        </div>
        <div class="two-column gt-m960">
          <div class="left-column">
            <div
              v-for="item in personalData.additionalInformation.leftColumn"
              :key="item.id"
              class="item-section"
            >
              <span class="personal-data-title-section">
                <!-- <v-icon class="personal-data-icon">
                  {{ item.icon }}
                </v-icon> -->
                {{ item.keyName }}
                <span class="dash">{{ ' - ' }}</span> <br />
              </span>
              <template v-if="item.href">
                <a :href="item.href" target="_blank" class="personal-data-link">
                  {{ item.keyValue }}
                </a>
              </template>
              <template v-else>
                {{ item.keyValue }}
              </template>
            </div>
          </div>
          <div class="right-column">
            <div
              v-for="item in personalData.additionalInformation.rightColumn"
              :key="item.id"
              class="item-section"
            >
              <span class="personal-data-title-section">
                <!-- <v-icon class="personal-data-icon">
                  {{ item.icon }}
                </v-icon> -->
                {{ item.keyName }}
                <span class="dash">{{ ' - ' }}</span> <br />
              </span>
              <template v-if="item.href">
                <a :href="item.href" target="_blank" class="personal-data-link">
                  {{ item.keyValue }}
                </a>
              </template>
              <template v-else>
                {{ item.keyValue }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="two-column m600-m960" style="width: 100%;">
      <div class="left-column" style="display: flex; width: 50%;">
        <div
          v-for="item in personalData.additionalInformation.leftColumn"
          :key="item.id"
          class="item-section"
          style="width: 50%;"
        >
          <span class="personal-data-title-section">
            <!-- <v-icon class="personal-data-icon">
              {{ item.icon }}
            </v-icon> -->
            {{ item.keyName }}
            <span class="dash">{{ ' - ' }}</span> <br />
          </span>
          <template v-if="item.href">
            <a :href="item.href" target="_blank" class="personal-data-link">
              {{ item.keyValue }}
            </a>
          </template>
          <template v-else>
            {{ item.keyValue }}
          </template>
        </div>
      </div>
      <div class="right-column" style="display: inline-flex;">
        <div
          v-for="item in personalData.additionalInformation.rightColumn"
          :key="item.id"
          class="item-section"
          style="width: 50%;"
        >
          <span class="personal-data-title-section">
            <!-- <v-icon class="personal-data-icon">
              {{ item.icon }}
            </v-icon> -->
            {{ item.keyName }}
            <span class="dash">{{ ' - ' }}</span> <br />
          </span>
          <template v-if="item.href">
            <a :href="item.href" target="_blank" class="personal-data-link">
              {{ item.keyValue }}
            </a>
          </template>
          <template v-else>
            {{ item.keyValue }}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '../assets/images/profile.jpg'

export default {
  props: {
    fullName: {
      type: String,
      default: '',
    },
    personalData: {
      type: Object,
      default: () => {
        return {}
      },
    },
    darkTheme: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      profileImage,
      counter: 0,
      desc:
        'Specjalizuję się w programowaniu webowym. Swoją wiedzę poszerzam z zakresu technologii chmurowych. Ukończyłem studia inżynierskie, magisterskie oraz podyplomowe. Cały czas poznaję różne nowe zagadnienia techniczne oraz eksperymentuję z różnymi projektami. Ta strona zawiera najważniejsze informacje o moim doświadczeniu, używanych technologiach oraz wykształceniu i certyfikatach.',
    }
  },
}
</script>

<style lang="scss" scoped>
.top-section-container {
  background-color: transparent;
  margin-top: 80px;
  position: relative;
  z-index: 0;
}
.top-section-container-dark-theme {
  background-color: #343b42;
}
.img-section {
  width: 30%;
}
.profile-image {
  width: 90%;
  border-radius: 340px;
}
.full-name {
  font-size: 44px;
  text-align: left;
  margin-top: 20px;
  font-weight: 900;
  color: var(--color-text);

  & br {
    display: none;
  }
}
.two-column {
  display: flex;
  margin-top: 25px;
  // padding-right: 20px;
}
.left-column {
  width: 50%;
}
.right-column {
  width: 50%;
}
.text-item-fl {
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 28px;
}
.personal-data-section {
  width: 70%;
}
.personal-data-title-section {
  font-weight: 600;
  letter-spacing: 0.5px;

  br {
    display: none;
  }
}
.personal-data-link {
  text-decoration: none;
}
.personal-data-icon {
  font-size: 20px;
  margin-top: -4px;
  padding-right: 10px;
}
.top-section {
  display: flex;
}
.mobile-version {
  display: none;
}
.desktop-version {
  display: inline-block;
}
.dash {
  display: inline;
}
.item-section {
  padding-bottom: 14px;
  font-size: 14px;
  color: var(--color-text);
}
.item-section-name {
  padding-bottom: 14px;
  color: var(--color-text);
}
.m600-m960 {
  display: none;
}
.gt-m960 {
  display: flex;
}
.description-text {
  color: var(--color-text);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.6px;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 16px;
  padding-top: 16px;
  border-top: 1px solid #f2f2f2;
}

@media only screen and (max-width: 1080px) {
  .m600-m960 {
    display: flex;
  }
  .gt-m960 {
    display: none;
  }
}

@media only screen and (max-width: 960px) {
  .full-name {
    font-size: 36px;
  }
  .text-item-fl {
    font-size: 3vw;
    letter-spacing: 18px;
  }
  .item-section {
    font-size: 12px;
  }
  // .personal-data-section {
  //   padding-left: 10px;
  // }
  .personal-data-title-section {
    font-size: 12px;
    br {
      display: inline;
    }
  }
  .dash {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .gt-m960 {
    display: flex;
  }
  .m600-m960 {
    display: none;
  }
  .xpoo {
    display: none;
  }
  .desktop-version {
    display: none;
  }
  .mobile-version {
    display: flex;
    margin-bottom: 40px;
  }
  .top-section {
    display: inline;
  }
  .top-section-container {
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .img-section {
    width: 34%;
  }
  .profile-image {
    width: 100%;
  }
  .full-name {
    width: 66%;
    font-size: 4.8vw;
    letter-spacing: 6px;
    padding-left: 20px;
    margin-top: 0;
    text-align: left;
    line-height: 6;

    // & br {
    //   display: flex;
    // }
  }
  .two-column {
    padding-bottom: 14px;
    width: 100%;
  }
  .description-text {
    font-size: 14px;
    letter-spacing: 0.4px;
  }
  .dash {
    display: none;
  }
  .item-section {
    font-size: 12px;
  }
  .personal-data-section {
    padding-left: 0;
    width: 100%;
  }
  .personal-data-title-section {
    font-size: 12px;

    br {
      display: inline;
    }
  }
}
</style>
