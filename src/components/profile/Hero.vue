<template>
  <div class="hero white--text center">
    <div class="black-rect align-self-start d-flex">
      <div class="hero-text">PROFILE DESCRIPTION</div>
    </div>
    <div class="hero-content d-flex align-start justify-center">
      <img class="img" src="../../assets/head.svg" alt="attaker head" />
    </div>
  </div>
</template> 

<script>
export default {};
</script>


<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");
.profile {
  .hero {
    margin: 40px 0 0 0;
    position: relative !important;
    max-width: 1297px;
    height: 394px;
    font-family: "Archivo Black";
    text-transform: uppercase;
    .hero-text {
      z-index: 2;
      line-height: 78%;
      font-size: 132px;

      max-width: 1027px !important;
      margin: auto auto 0 !important;
    }
    .hero-content {
      margin: -37px;
      width: 100%;

      .img {
        margin-top: 30px;
        z-index: 3;
        width: 244px !important;
        height: 298px !important;
      }
    }

    .black-rect {
      position: absolute !important;
      z-index: 2;
      background: black;
      width: 100%;
      height: 262px !important;
      z-index: 1;
      height: 477px;
      border-radius: 20px;
    }
  }
}
</style>