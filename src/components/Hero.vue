<template>
  <div id="hero" class="hero">
    <v-card id="hero-card" class="black-card d-none d-md-flex black align-end" height="477">
      <v-row class="custom-row align-center justify-center">
        <v-col
          lg="4"
          md="4"
          sm="11"
          :class="[{'mobile-img': !enableRow},'d-flex justify-end']"
          height="400"
        >
          <v-img src="../assets/head.svg" alt="head" class="z-index-3" contain></v-img>
        </v-col>

        <v-col
          lg="8"
          md="8"
          sm="12"
          class="d-none d-md-flex justify-lg-start justify-sm-center justify-md-start justify-xs-center"
        >
          <div
            :class="[textSize,'text-transform-uppercase white--text custom-text archivo-black z-index-4 ']"
          >MAY THE FORCE BE WITH YOU</div>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="black black-card pl-2 pr-2">
      <v-img
        id="hero-modile"
        class="d-flex d-md-none align-end pt-10 pb-10"
        src="../assets/head.svg"
      >
        <div
          :class="[textSize,'  text-transform-uppercase white--text custom-text archivo-black z-index-4 ']"
        >MAY THE FORCE BE WITH YOU</div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      class: "text-transform-uppercase white--text custom-text archivo-black  "
    };
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.name);
  },
  computed: {
    textSize: {
      cache: false,
      get() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "fs-60";

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
    },
    enableRow: {
      cache: false,
      get() {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
          case "sm":
            return false;
          default:
            return true;
        }
      }
    }
  }
};
</script>

<style lang='scss'>
.hero {
  .black-card {
    border-radius: 20px !important;
  }
  position: relative;
  margin-bottom: 100px;
  .custom-text {
    line-height: 78.1%;
    font-family: "Archivo Black";
  }
  .custom-row {
    height: 400px;
  }

  .mobile-img {
    top: 100px;
  }
}
</style>