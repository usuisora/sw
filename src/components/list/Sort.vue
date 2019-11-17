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
        v-for="param in params"
        :key="param.value"
        @click="isOpened = !isOpened; selected = param.name; setSort(param.value)"
      >
        <v-list-item-title>{{ param.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      // sortParams: ["crew", "cost", "mglt"],
      params: [
        {
          name: "by crew size",
          value: "crew"
        },
        {
          name: "BY COST IN CREDITS",
          value: "cost_in_credits"
        },
        {
          name: "BY MGLT NUMBER",
          value: "MGLT"
        }
      ],
      isOpened: false
    };
  },
  props: ["setSort"]
};
</script>

<style lang="scss">
.sort {
  .custom-column {
    position: relative;
  }
}
</style>