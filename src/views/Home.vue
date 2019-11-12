<template>
  <div class="home">
    <Cover />
    <Dashboard />
    <Form />
  </div>
</template>
<script>
import Cover from "../components/Cover";
import Dashboard from "../components/Dashboard";
import Form from "../components/Form";
export default {
  name: "home",
  components: { Cover, Dashboard, Form }
};
</script>
<style >
.home {
  position: relative;
}
</style>