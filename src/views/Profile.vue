<template>
  <div class="profile">
    <div class="title">{{id}}</div>
    <ProfileHero />
    <Description />
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
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
  ,
  created(){
    localStorage.getItem('starships')
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
