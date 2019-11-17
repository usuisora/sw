<template>
  <div class="profile">
    <ProfileHero />
    <Description />
    <!-- <v-container class="d-none d-md-flex">
      <CTA :image_src="__dirname+'/src/assets/strait-ds.svg'" />
    </v-container>
    <v-container class="d-flex d-md-none">
      <CTA-mobile :image_src="__dirname+'/src/assets/strait-ds.svg'" />
    </v-container>-->

    <CTA image="strait-ds.svg">
      <v-img src="../assets/strait-ds.svg"></v-img>
    </CTA>
  </div>
</template>

<script>
import ProfileHero from "../components/profile/ProfileHero";
import Description from "../components/profile/Description";
import CTA from "../components/CTA";
// import CTA_mobile from "../components/mobile/CTA-mobile";

export default {
  components: {
    ProfileHero,
    Description,
    CTA
    // "CTA-mobile": CTA_mobile
  }
};
</script>

<style lang="scss">
.profile {
  position: relative;
  width: 100%;
  .custom-cta-img {
    // right: -40px;
    transform: rotate(20deg);
    width: 100%;
  }
}
</style>
