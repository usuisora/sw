<template>
  <div class="profile">
    <Hero />
    <Description />
    <CTA>
      <v-img class="custom-cta-img" src="../assets/strait-ds.svg" alt="ship" contain />
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
  position: relative;
  width: 100%;
  .custom-cta-img {
    right: -40px;
    transform: rotate(20deg);
  }
}
</style>
