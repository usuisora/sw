<template>
  <v-app id="app">
    <v-content class="white">
      <Navbar>
        <v-btn class="hidden-sm-and-down" dark depressed large width="160">Log in</v-btn>
      </Navbar>
      <router-view></router-view>
      <Navbar>
        <v-btn class="hidden-sm-and-down" dark depressed large width="160">Na verh</v-btn>
      </Navbar>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");
@import url("https://fonts.googleapis.com/css?family=Archivo&display=swap");
#app {
  font-family: Courier, monospace;
}
body {
  max-width: 1330px;
  width: 92%;
  margin: 0 auto;
  color: black !important;
}
.rounded {
  border-radius: 11px !important;
}

@mixin font-sizes {
  .fs-16 {
    font-size: 16px !important;
  }
  .fs-18 {
    font-size: 18px !important;
  }
  .fs-22 {
    font-size: 22px !important;
  }
  .fs-132 {
    font-size: 132px !important;
  }
  .fs-108 {
    font-size: 108px !important;
  }
  .fs-100 {
    font-size: 100px !important;
  }
  .fs-63 {
    font-size: 63px !important;
  }
  .fs-60 {
    font-size: 60px !important;
  }
  .fs-63 {
    font-size: 63px !important;
  }
}

* {
  @include font-sizes;
}
.archivo-black {
  font-family: "Archivo Black" !important;
}
</style>