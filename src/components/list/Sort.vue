<template>
  <v-menu offset-y tile>
    <template v-slot:activator="{ on }">
      <v-btn
        tile
        x-large
        depressed
        color="secondary "
        class="fs-14"
        v-on="on"
        width="270"
        @click="isOpened = !isOpened"
      >
        {{selected=='' ? 'Order by' : selected}}
        <v-icon right v-if="!isOpened">mdi-chevron-down</v-icon>
        <v-icon right v-else>mdi-chevron-up</v-icon>
      </v-btn>
    </template>
    <v-list tile class="secondary mt-2" dark>
      <v-list-item
        v-for="(item, index) in sortParams"
        :key="index"
        @click="isOpened = !isOpened; selected = item"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      sortParams: ["crew", "cost", "mglt"],
      isOpened: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.sort {
  .custom-column {
    position: relative;
  }
}
</style>