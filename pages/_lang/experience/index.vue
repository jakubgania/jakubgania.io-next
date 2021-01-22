<template>
  <div class="dotted-background">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Doświadczenie"
    />
    <TextTopSectionComponent />
    <div class="content-container">
      <div class="experience-container">
        <TopSectionContainerComponent
          :full-name="fullName"
          :personal-data="personalData"
        />
        <SocialComponent />
        <div class="information-section">
          <ExperienceComponent />
          <SkillsComponent />
          <EducationComponent />
          <CertificatesComponent />
          <LanguagesComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopSectionContainerComponent from '@/components/TopSectionContainer'
import TextTopSectionComponent from '@/components/experience/TextTopSection'
import SocialComponent from '@/components/experience/Social'
import ExperienceComponent from '@/components/experience/Experience'
import SkillsComponent from '@/components/experience/Skills'
import EducationComponent from '@/components/experience/Education'
import CertificatesComponent from '@/components/experience/Certificates'
import LanguagesComponent from '@/components/experience/Languages'
import jsonData from '@/json/data'
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
    TopSectionContainerComponent,
    TextTopSectionComponent,
    SocialComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    CertificatesComponent,
    LanguagesComponent,
  },
  data() {
    return {
      personalData: jsonData.expirience.sectionPersonalData,
      fullName: jsonData.expirience.sectionPersonalData.fullName,
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
      title: 'Jakub Gania Software | Doświadczenie',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Doświadczenie',
        },
        {
          name: 'keywords',
          content: 'Doświadczenie',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Jakub Gania Software | Doświadczenie',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://jakubgania.io/experience',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Moje doświadczenie',
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

<style>
div .section .description p {
  margin-bottom: 2px;
}
div .section .description img {
  width: 100%;
  margin-top: 20px;
}
</style>

<style lang="scss" scoped>
$bg-color: var(--dotted-bg-color);
$dot-color: var(--dots-bg-color);

$dot-size: 1px;
$dot-space: 70px;

.dotted-background {
  margin-top: -80px;
  padding-top: 80px;
  margin-left: 10px;
  margin-right: 10px;
  background: linear-gradient(
        90deg,
        $bg-color ($dot-space - $dot-size),
        transparent 1%
      )
      center,
    linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
    $dot-color;
  background-size: $dot-space $dot-space;
}
.content-container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 140px;
}

@media only screen and (max-width: 960px) {
  .content-container {
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media only screen and (max-width: 600px) {
  $dot-size: 1px;
  $dot-space: 40px;

  .dotted-background {
    margin-top: -40px;
    padding-top: 40px;
    background: linear-gradient(
          90deg,
          $bg-color ($dot-space - $dot-size),
          transparent 1%
        )
        center,
      linear-gradient($bg-color ($dot-space - $dot-size), transparent 1%) center,
      $dot-color;
    background-size: $dot-space $dot-space;
  }
  .content-container {
    padding-bottom: 60px;
    padding-left: 0;
    padding-right: 0;
  }
  .information-section {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
