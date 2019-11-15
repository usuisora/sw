<template>
  <v-card outlined class="filters" width="348">
    <div class="pilots">
      <v-row class>
        <v-col class="filter-title">Pilots</v-col>
        <v-spacer></v-spacer>
        <v-col class="opts-count d-flex align-center justify-end">(314)</v-col>
      </v-row>

      <v-container fluid dense>
        <v-checkbox
          class="checkbox"
          hide-details
          v-for="pilot in pilots "
          v-model="selected"
          :key="pilot"
          :label="pilot"
          :value="pilot"
        ></v-checkbox>
        <button class="primary--text vue-all">vue all</button>
      </v-container>
    </div>

    <Range title="Crew Size" :max="max_crew_count" :value="crew_range" />
    <Range title="Passengers capacity" :max="max_crew_count" :value="crew_range" />
  </v-card>
</template>

<script>
import Range from "./Range";
export default {
  components: {
    Range
  },
  data() {
    return {
      pilots: [
        "Luke Skywalker1",
        "Luke Skywalker2",
        "Luke Skywalker3",
        "Luke Skywalker4",
        "Luke Skywalker5"
      ],
      crew_range: [1, 12],
      max_crew_count: 120
    };
  },
  computed() {
    return {
      selectedPilots: []
    };
  }
};
</script>

<style lang='scss'>
.filters {
  padding: 54px 37px 63px 32px;
  // max-height: 765px;
  .filter-title {
    font-family: Archivo Black;
    font-size: 22px;
  }
  .container--fluid {
    padding: 0 !important;
  }
  .opts-count {
    color: #0066ff;
    font-size: 12px;
  }
  .checkbox {
    font-size: 18px;
  }
  .vue-all {
    font-family: Courier;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    margin: 36px 0;
    font-weight: 600;
  }
}
</style>