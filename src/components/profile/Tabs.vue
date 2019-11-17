<template>
  <div class="tabs">
    <v-row height="250">
      <v-col cols="12" lg="4" md="4" sm="6" v-for="tab in tabs" :key="tab.name">
        <v-card
          height="250"
          class="custom-card d-flex flex-column"
          v-ripple="{class: 'black--text '}"
        >
          <v-card-title class="custom-title font-weight-bold black--text">{{tab.name}}</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">{{tab.value}}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["starship"],
  data() {
    return {
      tabs: [
        {
          name: "COST IN CREDITS ",
          value: this.starship.cost_in_credits
        },
        {
          name: "CREW",
          value: this.starship.crew
        },
        {
          name: "PASSENGERS",
          value: this.starship.passengers
        },
        {
          name: "CARGO CAPACITY",
          value: this.starship.cargo_capacity
        },
        {
          name: "CONSUMABLES",
          value: this.starship.consumables
        },
        {
          name: "FILMS COUNTER ",
          value: this.starship.films.length
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.tabs {
  padding: 39px 0;
  .custom-card {
    padding: 30px 35px;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.15);
  }
  .custom-title {
    font-size: 18px;
    font-variant: small-caps;
    padding: 0;
  }

  .value {
    font-family: Archivo;
    font-size: 60px;
    line-height: 65px;
    padding: 0;
  }
}
</style>