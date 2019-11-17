<template>
  <nav id="nav" class="navbar">
    <v-toolbar class="justify-center" flat height="182">
      <v-toolbar-title app>
        <v-btn class="logo white" text large height="156" router to="/">
          <img src="../assets/Logotype.svg" alt />
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-items class="links d-none d-sm-flex">
        <v-btn
          v-for="link in links"
          :key="link.name"
          text
          @click="$vuetify.goTo(link.target, options)"
          class="text-capitalize fs-16 font-weight-black"
        >{{link.name}}</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <slot class="hidden-sm-and-down"></slot>

      <v-app-bar-nav-icon
        large
        class="d-flex d-sm-none black--text"
        @click="menuToggle = !menuToggle"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <DropDownMenu :links="links" v-show="menuToggle " :options="options" />
  </nav>
</template>

<script>
import DropDownMenu from "./DropDownMenu";
import * as easings from "vuetify/lib/services/goto/easing-patterns";

export default {
  data() {
    return {
      links: [
        {
          name: "Hero",
          target: ".hero"
        },
        {
          name: "List",
          target: "#list"
        },
        {
          name: "CTA Block",
          target: "#form"
        },
        {
          footer: "Footer",
          target: ".footer"
        }
      ],

      menuToggle: false,
      options: {
        duration: 246,
        offset: 10,
        easing: "easeInOutCubic",
        easings: Object.keys(easings)
      }
    };
  },
  components: {
    DropDownMenu
  }
};
</script>

<style lang='scss' >
.navbar {
  margin: 0;
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