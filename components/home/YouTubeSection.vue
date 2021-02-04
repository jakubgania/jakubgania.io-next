<template>
  <div class="container">
    <div class="section-title">
      <h2>
        YouTube
      </h2>
    </div>
    <div>
      <div class="grid-renderer" style="width: 100%;">
        <div class="grid-item">
          <div class="grid-media">
            <div class="xdfg">
              <iframe
                class="ifrm"
                src="https://www.youtube.com/embed/glEcJ_92rXs"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube - Coding Timelapse | 1"
              />
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="grid-media">
            <div class="xdfg">
              <iframe
                class="ifrm"
                src="https://www.youtube.com/embed/for1ayFZD5g"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube - Computing cluster - BEM in WCSS"
              />
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="grid-media">
            <div class="xdfg">
              <iframe
                class="ifrm"
                src="https://www.youtube.com/embed/uVX9MfeJrEQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                title="YouTube - GitHub - my profile and projects | 26-11-2020"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
}
.grid-renderer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.grid-item {
  width: 33.33%;
  padding-left: 4px;
  padding-right: 4px;
}
.grid-media {
  width: 100%;
  position: relative;
}
.grid-media::before {
  display: block;
  content: '';
  width: 100%;
  padding-top: 56.25%;
}
.th-thumbnail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: block;
}
.tmb {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
.ifrm {
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.xdfg {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
}
.section-title {
  font-weight: 800;
  text-align: center;
  margin-bottom: 80px;
}

@media only screen and (max-width: 600px) {
  .grid-renderer {
    display: block;
  }
  .grid-item {
    width: 100%;
    margin-bottom: 10px;
  }
  .section-title h2 {
    font-size: 36px;
  }
}
</style>
