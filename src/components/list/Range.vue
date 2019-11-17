<template>
  <div class="range">
    <div class="filter-title mb-2">{{title}}</div>
    <v-row>
      <v-col cols="6">
        <v-text-field
          outlined
          dense
          type="number"
          class="pa-auto"
          hide-details
          :v-model="value[0]"
          :value="value[0]"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <v-text-field
          outlined
          dense
          type="number"
          hide-details
          :v-model="value[1]"
          :value="value[1]"
        />
      </v-col>
    </v-row>

    <v-range-slider v-model="value" @change="changeRange(value)" :max="max" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0
    };
  },

  props: { title: String, max: Number, value: Array, changeRange: Function }
};
</script>

<style lang='scss'>
.range {
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>