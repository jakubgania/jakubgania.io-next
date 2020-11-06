<template>
  <div class="content-container-next">
    <div class="top-image-container">
      <div class="top-image-container__section">
        <div class="top-image-container__content-section">
          <div class="top-image-container__title">
            <span style="font-size: 13vw;">
              [
            </span>
            projekty
            <span style="font-size: 13vw;">
              ]
            </span>
          </div>
        </div>
        <div class="top-image-container__scroll-down-container">
          <a
            href="#list-projects"
            class="top-image-container__scroll-down-anchor"
          >
            <div class="top-image-container__cheveron" />
            <div class="top-image-container__cheveron" />
            <div class="top-image-container__cheveron" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.top-image-container {
  position: relative;
  margin-bottom: 40px;

  $top-image-width: 100%;
  $top-image-height: calc(100vh - 64px);

  &__section {
    width: $top-image-width;
    height: $top-image-height;
    background-color: #000;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(../../assets/images/stickers-webp.webp);
      background-position: center;
      background-size: cover;
      width: $top-image-width;
      height: $top-image-height;
      opacity: 0.5;
      background-attachment: fixed;
    }
  }

  &__title {
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 10vw;
    font-weight: 900;
    letter-spacing: 8px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &__content-section {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &__scroll-down-container {
    position: absolute;
    left: 50%;
    bottom: calc(0px + 56px);
    width: 24px;
    height: 24px;
  }

  &__scroll-down-anchor {
    position: absolute;
    z-index: 4;
  }

  &__cheveron {
    position: absolute;
    width: 28px;
    height: 8px;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: move 3s ease-out infinite;

    &:first-child {
      animation: move 3s ease-out 1s infinite;
    }

    &:nth-child(2) {
      animation: move 3s ease-out 2s infinite;
    }

    &::before,
    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
      background: #fff;
    }

    &::before {
      left: 0;
      transform: skew(0deg, 30deg);
    }

    &::after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }
  }
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 960px) {
  .top-image-container {
    $top-image-height: calc(100vh - 48px);

    &__section {
      height: $top-image-height;

      &::after {
        height: $top-image-height;
      }
    }
  }
}
</style>
