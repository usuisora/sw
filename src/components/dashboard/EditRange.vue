<template>
  <div class="edit-range">
    <div class="filter-title mb-2">{{title}}</div>
    <v-row>
      <v-col>
        <v-text-field
          outlined
          dense
          type="number"
          hide-details
          :v-model="value[0]"
          :value="value[0]"
        />
      </v-col>
      <v-spacer></v-spacer>
      <v-col>
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

    <v-range-slider v-model="value" :max="max" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: 0
    };
  },

  props: {
    title: String,
    max: Number,
    value: [Number, Number]
  }
};
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>