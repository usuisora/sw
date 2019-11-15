<template>
  <div class="list">
    <v-row>
      <v-col cols="1">
        <div class="vtext">our ships</div>
      </v-col>
      <v-col cols="3">
        <Filters />
      </v-col>
      <v-col cols="8">
        <Sort />

        <Cards />
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
  }
};
</script>

<style lang ='scss'>
.list {
  position: relative;
  display: flex;
  z-index: 1;
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