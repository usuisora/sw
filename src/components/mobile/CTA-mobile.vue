<template>
  <div class="cta-mobile">
    <v-card class="primary justify-center align-center pb-10" rounded flat cols="12">
      <v-img :src="image_src"></v-img>

      <v-card-text class="px-10">
        <v-text-field block class="white my-5 pa-10 archivo-black" placeholder="EMAIL" hide-details></v-text-field>
        <v-text-field block class="white my-5 pa-10 archivo-black" placeholder="PHONE" hide-details></v-text-field>
        <v-btn text block x-large class="black archivo-black">gp</v-btn>
      </v-card-text>
      <v-card-action class="ma-5"></v-card-action>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["image_src"]
};
</script>

<style>
.cta-mobile {
  width: 100%;
}
</style>