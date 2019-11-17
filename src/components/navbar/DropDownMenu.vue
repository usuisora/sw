<template>
  <v-list block class="my-6">
    <v-list-item two-line block class="d-flex flex-column white justify-center my-4">
      <v-btn
        v-for="link in links"
        :key="link.name"
        tile
        block
        x-large
        depressed
        class="white text-capitalize fs-16"
        @click="$vuetify.goTo(link.target, options)"
      >{{link.name}}</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: ["links", "options"]
};
</script>

<style>
</style>