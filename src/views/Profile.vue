<template>
  <div class="profile">
    <Hero />
    <Description />
    <CTA>
      <v-img src="../assets/death-star.svg" alt="ship" />
    </CTA>
  </div>
</template>

<script>
import Hero from "../components/profile/Hero";
import Description from "../components/profile/Description";
import CTA from "../components/CTA";

export default {
  components: {
    Hero,
    Description,
    CTA
  }
};
</script>

<style lang="scss">
.profile {
  margin: 0 30px;
  .custom-right {
    left: 100px;
  }
}
</style>
