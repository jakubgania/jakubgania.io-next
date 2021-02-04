<template>
  <div class="top-experience-text">
    <div style="display: inline-flex;">
      <div
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <span class="bracket">
          {
        </span>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-dealy="200"
        data-aos-duration="1200"
        data-aos-once="true"
        class="experience-text"
      >
        <h1>Experience</h1>
      </div>
      <div
        data-aos="fade-left"
        data-aos-dealy="50"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        <span class="bracket">
          }
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-experience-text {
  text-align: center;
  position: relative;
  z-index: 0;
  font-size: 6vw;
  font-weight: 700;
  letter-spacing: 6px;
  padding-top: 60px;
  padding-bottom: 120px;
  padding-left: 20px;
}
.bracket {
  color: var(--top-section-container-bracket-color);
}
.experience-text {
  width: 100%;
  padding: 14px;
  background: url(../../assets/images/background-abstract.jpg) no-repeat;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: center;
  font-family: 'MaisonNeueExtended'; /* stylelint-disable-line */

  & h1 {
    font-size: inherit;
  }
}

@media only screen and (max-width: 960px) {
  .experience-text {
    padding-top: inherit;
  }
}

@media only screen and (max-width: 600px) {
  .top-experience-text {
    font-size: 8vw;
    padding-left: 20px;
    padding-right: 12px;
    letter-spacing: 8px;
    padding-top: 50px;
    padding-bottom: 10px;
  }
}
</style>
