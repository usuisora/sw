<template>
  <v-app id="app">
    <v-content class="white">
      <Navbar>
        <NavButton>log in</NavButton>
      </Navbar>
      <router-view></router-view>
      <Navbar>
        <NavButton>Na verh</NavButton>
      </Navbar>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import NavButton from "./components/navbar/NavButton";
export default {
  name: "App",
  components: {
    Navbar,
    NavButton
  },
  data: () => ({
    //
  })
};
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");
#app {
  font-family: Courier, monospace;
}
body {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 70px;
}
</style>