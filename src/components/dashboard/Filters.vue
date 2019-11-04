<template>
  <form class="filters">
    <label for="pilots">Pilots</label>
    <v-container fluid>
      <p>{{ selected }}</p>
      <v-checkbox
        v-for="pilot in pilots"
        v-model="selected"
        :key="pilot"
        :label="pilot"
        :value="pilot"
      ></v-checkbox>
    </v-container>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pilots: ["iron", "koli", "boli"]
    };
  },
  computed: {
    selectedPilots: []
  }
};
</script>

<style>
</style>