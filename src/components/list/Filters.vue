<template>
  <v-card outlined class="filters">
    <div class="pilots">
      <v-row class>
        <v-col class="filter-title">Pilots</v-col>
        <v-spacer></v-spacer>
        <v-col class="opts-count d-flex align-center justify-end">(2)</v-col>
      </v-row>

      <v-container dense>
        <v-checkbox
          class="fs-18"
          color="primary"
          hide-details
          v-for="pilot in pilots "
          v-model="selectedPilots"
          @change="setFilters({pilots: selectedPilots})"
          :key="pilot.name"
          :label="pilot.name"
          :value="pilot.url"
        ></v-checkbox>

        <v-btn
          text
          class="font-weight-bold primary--text text-capitalize fs-14 my-10 mx-0 px-0"
        >vue all</v-btn>
      </v-container>
    </div>

    <Range
      title="Crew Size"
      :max="maxCrewSize"
      :value="crewRange"
      :changeRange="(value) => {crewRange = value; setFilters({crew:value})}"
    />
    <Range
      title="Passengers capacity"
      :max="maxPsSize"
      :value="capacityRange"
      :changeRange="(value) => {capacityRange = value; setFilters({capacity:value})}"
    />}
  </v-card>
</template>

<script>
import Range from "./Range";
export default {
  components: {
    Range
  },
  props: ["pilots", "starships", "setFilters"],
  data() {
    return {
      crewRange: [0, this.maxCrewSize],
      capacityRange: [0, this.maxPsSize],

      selectedPilots: []
    };
  },
  computed: {
    maxCrewSize: {
      cache: false,
      get() {
        return Number(
          this.starships
            .slice()
            .sort((a, b) => Number(b.crew) - Number(a.crew))[0].crew
        );
      }
    },
    maxPsSize: {
      cache: false,
      get() {
        return Number(
          this.starships
            .slice()
            .sort((a, b) => Number(b.passengers) - Number(a.passengers))[0]
            .passengers
        );
      }
    }
  },
  methods: {},
  created() {
    this.setFilters({ crew: this.crewRange, capacity: this.capacityRange });
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
}
</style>