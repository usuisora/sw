<template>
  <div id="list" class="list">
    <v-row>
      <v-col md="1" sm="12" class="d-flex flex-column">
        <div class="vtext">our starships</div>
        <v-spacer></v-spacer>
        <Sort />
        <v-btn large depressed class="flat">
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </v-col>
      <v-col md="3" sm="12">
        <Filters />
      </v-col>
      <v-col md="8" sm="12">
        <Sort />

        <Cards :starships="starships" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import VerticalTitle from "./list/VerticalTitle";
import Filters from "./list/Filters";
import Cards from "./list/Cards";
import Sort from "./list/Sort";
export default {
  components: {
    Filters,
    Cards,
    Sort
    // VerticalTitle
  },
  data() {
    return { starships: [] };
  },
  created() {
    this.$http
      .get("https://swapi.co/api/starships")
      .then(response => {
        // console.log(response.body);
        return response.body;
      })
      .then(body => {
        console.log(body);
        this.starships = body.results;
      });
  }
};
</script>

<style lang ='scss'>
.list {
  position: relative;
  display: flex;
  z-index: 1;
}
.vtext {
  margin-top: 200px;
  line-height: 26px;
  font-family: "Archivo Black";
  font-size: 24px;
  transform: rotate(-90deg) !important;
  text-transform: uppercase;
}

@media (max-width: 900px) {
  .vtext {
    margin-top: 0px;
    line-height: 26px;
    font-family: "Archivo Black";
    font-size: 10px;
    transform: rotate(0) !important;
    text-transform: uppercase;
  }
}
.invisible-text {
  position: absolute;
  font-family: Archivo Black;
  color: #fafafa;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 109px;
  width: 852px;
  height: 331px;
  text-transform: uppercase;
  bottom: 0;
  z-index: 0;
}
</style>