<template>
  <div class="home">
    <Hero />
    <List />
    <CTA image="strait-ds.svg">
      <v-img src="../assets/starship.svg"></v-img>
    </CTA>
  </div>
</template>
<script>
import Hero from "../components/Hero";
import List from "../components/List";
import CTA from "../components/CTA";

export default {
  name: "home",
  components: { Hero, List, CTA }
};
</script>
<style >
.home {
  position: relative;
  width: 100%;
}
</style>