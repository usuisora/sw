<template>
  <v-app id="app">
    <v-content class="white">
      <Navbar>
        <v-btn dark depressed large width="160">Log in</v-btn>
      </Navbar>
      <router-view></router-view>
      <Navbar>
        <v-btn dark depressed large width="160">Na verh</v-btn>
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

<style >
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");
@import url("https://fonts.googleapis.com/css?family=Archivo&display=swap");
#app {
  font-family: Courier, monospace;
}

body {
  position: relative;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  /* padding: 0 70px; */
  color: black !important;
}
.rounded {
  border-radius: 11px !important;
}
</style>