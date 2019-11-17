<template>
  <div  class="hero white--text center">
    <v-card class="black-rect align-self-start d-flex">
      <div class="hero-text fs-132 white--text" :class="textSize">PROFILE DESCRIPTION</div>
    </v-card>
    <div class="hero-content d-flex align-start justify-center">
      <v-img class="img" src="../../assets/head.svg" alt="attaker head" contain />
    </div>
  </div>
</template> 

<script>
export default {
  computed: {
    textSize: {
      cache: false,
      get() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "fs-60 ";
          case "sm":
            return "fs-63";
          case "md":
            return "fs-100";
          case "lg":
          case "xl":
            return "fs-132";
          default:
            return "fs-132";
        }
      }
    }
  }
};
</script>


<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");
.profile {
  .hero {
    margin: 40px 0 0 0;
    position: relative !important;
    max-width: 1297px;
    font-family: "Archivo Black";
    text-transform: uppercase;
    .hero-text {
      z-index: 2;
      line-height: 78%;

      max-width: 1027px !important;
      margin: auto auto 0 !important;
    }
    .hero-content {
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
      border-radius: 20px !important;
    }
    @media (max-width: 900px) {
      .img {
        margin-top: 10px;
        z-index: 3;
        width: 244px !important;
        height: 298px !important;
      }

      .hero-text {
        word-wrap: break-word !important;
        width: 100%;
      }
      .black-rect {
        position: absolute !important;
        height: 362px !important;
      }
    }
  }
}
</style>