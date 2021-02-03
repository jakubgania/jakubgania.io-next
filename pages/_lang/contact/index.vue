<template>
  <div class="content-container">
    <BreadcrumbsComponent
      parent-page-path=""
      parent-page-title="Home"
      child-page-title="Kontakt"
    />
    <div class="main-title">
      Kontakt
    </div>
    <div class="html-text" v-text="'<h3>'" />
    <div class="p-section">
      <div class="text-grid">
        <div>
          <div>
            <p class="question text-position">
              {{ description1 }}
            </p>
            <p class="question">
              {{ description2 }}
            </p>
          </div>
        </div>
        <div class="link-grid">
          <template v-for="item in items">
            <a
              :key="item.id"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class=""
            >
              {{ item.name }}
            </a>
          </template>
          <a href="mailto:contact@jakubgania.io">
            Email
          </a>
        </div>
      </div>
    </div>
    <div class="html-text" v-text="'</h3>'" />
  </div>
</template>

<script>
import BreadcrumbsComponent from '../../../components/Breadcrumbs'

export default {
  components: {
    BreadcrumbsComponent,
  },
  data() {
    return {
      description1:
        'Tutaj znajdziesz różne sposoby kontaktu ze mną. Może zauważyłeś jakiś błąd na mojej stronie lub chcesz się podzielić przemyśleniami o projekcie ? Możesz do mnie napisać za pomocą różnych platform lub po prostu za pomocą e-maila.',
      description2: 'Masz jakieś pytanie ? Śmiało napisz.',
      items: [
        {
          name: 'GitHub',
          href: 'https://github.com/jakubgania',
        },
        {
          name: 'LinkedIn',
          href: 'https://www.linkedin.com/in/jakubgania',
        },
        {
          name: 'Twitter',
          href: 'https://twitter.com/jakubgania',
        },
        {
          name: 'YouTube',
          href: 'https://www.youtube.com/channel/UCpRXjQ_FgRfAqP6uIsA7UEQ',
        },
      ],
    }
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.locale,
      },
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
  max-width: 1200px;
  width: 100%;
  margin: auto;
  min-height: 100vh;
}
.main-title {
  font-size: 100px;
  font-weight: 800;
  margin-top: 40px;
  margin-bottom: 40px;
}
.email {
  letter-spacing: 2px;
}

.text-grid {
  display: grid;
  grid-template-columns: 2fr 0.8fr;
  column-gap: 80px;
}
.link-grid {
  display: grid;
}
.link-grid a {
  text-decoration: none;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.8;
  color: #0276ff;
  margin-top: -14px;

  &:hover {
    color: #3b97ff;
  }
}
.question {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
}
.text-position {
  margin-bottom: 60px;
}
.p-section {
  padding-top: 10px;
  padding-left: 20px;
  border-left: dotted;
  border-left-color: #e5eff8;
}
.html-text {
  color: #e5eff8;
  font-weight: 500;
  font-size: 12px;
}

@media only screen and (max-width: 1920px) {
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
  .main-title {
    font-size: 80px;
  }
  .question {
    margin-bottom: 30px;
  }
  .link-grid a {
    font-size: 22px;
  }
}

@media only screen and (max-width: 1024px) {
  .main-title {
    font-size: 60px;
  }
  .text-grid {
    grid-template-columns: 1fr;
  }
  .question {
    font-size: 18px;
  }
}

@media only screen and (max-width: 600px) {
  .main-title {
    font-size: 34px;
  }
  .content-container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
