<template>
  <nav class="navbar">
    <v-toolbar class="justify-center" flat height="182">
      <v-toolbar-title app>
        <v-btn class="logo white" depressed large height="156" router to="/">
          <img src="../assets/Logotype.svg" alt />
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-items class="links hidden-sm-and-down">
        <v-btn text @click="$vuetify.goTo(target, options)" class="text-capitalize fs-16">Hero</v-btn>
        <v-btn text class="text-capitalize fs-16">List</v-btn>
        <v-btn text class="text-capitalize fs-16">CTA block</v-btn>
        <v-btn text class="text-capitalize fs-16">Footer</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <slot class="hidden-sm-and-down"></slot>

      <v-app-bar-nav-icon large class="hidden-md-and-up black--text"></v-app-bar-nav-icon>
    </v-toolbar>
    <MobileMenu />
  </nav>
</template>

<script>
import MobileMenu from "./MobileMenu";
import * as easings from "vuetify/lib/services/goto/easing-patterns";

export default {
  data() {
    return {
      target: "#list",
      options: {
        duration: 246,
        offset: -200,
        easing: "easeInOutCubic",
        easings: Object.keys(easings)
      }
    };
  },
  components: {
    MobileMenu
  }
};
</script>

<style lang='scss' >
.navbar {
  .v-toolbar__content,
  .logo {
    padding: auto 0 !important;
  }
  .links {
    margin: auto 100px;
    font-size: 16px;
  }
}
</style>