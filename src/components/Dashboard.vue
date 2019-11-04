<template>
  <div class="dashboard">
    <SideMark />
    <Filters />
    <Cards />
  </div>
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
}
</style>