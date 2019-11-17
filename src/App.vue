<template>
  <v-app id="app">
    <v-content class="white mx-2">
      <Navbar>
        <v-btn class="hidden-sm-and-down" dark depressed large width="160">Log in</v-btn>
      </Navbar>
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
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
  font-family: Courier;
}
html {
  position: relative;
  margin: 0;
  padding: 0 !important;
}
body {
  // position: relative;
  max-width: 1330px;
  width: 100%;
  padding: 0 !important;
  margin: 0 auto !important;
  overflow-x: hidden;
}
#app {
  width: 100%;
  color: black !important;
}

.rounded {
  border-radius: 11px !important;
}

@mixin font-sizes {
  .fs-14 {
    font-size: 14px !important;
  }
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
.courier-bold {
  font-weight: 900;
  font-family: "Courier10PitchBT-Bold", Courier, monospace;
}

@font-face {
  font-family: "fontfb3029173aa0b42b5bf8c8d9e74a7c6e";

  src: url("https://nomail.com.ua/files/eot/fb3029173aa0b42b5bf8c8d9e74a7c6e.eot?#iefix")
      format("embedded-opentype"),
    url("https://nomail.com.ua/files/woff/fb3029173aa0b42b5bf8c8d9e74a7c6e.woff")
      format("woff"),
    url("https://nomail.com.ua/files/woff2/fb3029173aa0b42b5bf8c8d9e74a7c6e.woff2")
      format("woff2");
}

@font-face {
  font-family: "Courier10PitchBT-Bold";
  src: local("Courier10PitchBT-Bold"),
    url("https://nomail.com.ua/files/woff/fb3029173aa0b42b5bf8c8d9e74a7c6e.woff")
      format("woff");
}
</style>