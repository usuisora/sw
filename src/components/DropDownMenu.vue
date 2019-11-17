<template>
  <v-list block>
    <v-list-item two-line block class="d-flex flex-column white justify-center">
      <v-btn
        v-for="link in links"
        :key="link"
        tile
        block
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