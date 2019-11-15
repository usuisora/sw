<template>
  <v-row class="d-flex justify-end mr-1">
    <v-col cols="3">
      <div>
        <v-menu offset-y tile>
          <template v-slot:activator="{ on }">
            <v-btn
              tile
              large
              depressed
              block
              color="secondary "
              v-on="on"
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
      </div>
    </v-col>
  </v-row>
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
.dropdown {
}
</style>