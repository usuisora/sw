<template>
  <v-container class="list">
    <SideMark />
    <Filters />
    <Cards />
    <div class="invisible-text"></div>
  </v-container>
</template>

<script>
import SideMark from "./list/SideMark";
import Filters from "./list/Filters";
import Cards from "./list/Cards";
export default {
  components: {
    Filters,
    Cards,
    SideMark
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