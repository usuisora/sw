<template>
  <v-container class="dashboard">
    <SideMark />
    <Filters />
    <Cards />
    <div class="invisible-text"></div>
  </v-container>
</template>

<script>
import SideMark from "./dashboard/SideMark";
import Filters from "./dashboard/Filters";
import Cards from "./dashboard/Cards";
export default {
  components: {
    Filters,
    Cards,
    SideMark
  }
};
</script>

<style lang ='scss'>
.dashboard {
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