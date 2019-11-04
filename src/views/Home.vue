<template>
  <div class="home">
    <Cover />
    <Dashboard />
  </div>
</template>
<script>
import Cover from "../components/Cover";
import Dashboard from "../components/Dashboard";

export default {
  name: "home",
  components: { Cover, Dashboard }
};
</script>
<style >
.home {
}
</style>