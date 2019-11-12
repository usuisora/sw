<template>
  <v-container class="sort">
    <v-row class="d-flex align-center justify-end" height="100px">
      <v-col cols="12" sm="4 ">
        <v-overflow-btn
          depressed
          dark
          class="mt-0 pt-0 secondary"
          height="60"
          width="117"
          :items="sortParams"
          label="Order by"
          target="#dropdown-example"
          hide-details
        ></v-overflow-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sortParams: ["crew", "cost", "mglt"]
    };
  }
};
</script>

<style lang="scss">
.sort {
  .v-overflow-btn .v-select__slot {
    background: #212121 !important;
    height: 40px;
    color: white !important;
  }
}
</style>