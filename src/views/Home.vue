<template>
  <div class="home">
    <Hero />
    <List />
    <div id="form">
      <v-container class="d-none d-md-flex">
        <CTA :image_src="img_src" />
      </v-container>
      <v-container class="d-flex d-md-none">
        <CTA-mobile :image_src="img_src" />
      </v-container>
    </div>
  </div>
</template>
<script>
import Hero from "../components/Hero";
import List from "../components/List";
import CTA from "../components/CTA";

export default {
  name: "home",
  components: { Hero, List, CTA },
  data() {
    return {
      img_src: __dirname + "/src/assets/strait-ds.svg"
    };
  }
};
</script>
<style >
.home {
  position: relative;
  width: 100%;
}
</style>