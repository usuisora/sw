<template>
  <nav class="navbar">
    <v-toolbar class="justify-center" flat height="182">
      <v-toolbar-title app>
        <v-btn class="logo white" flat large height="156">
          <img src="../assets/Logotype.svg" alt />
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-items class="links">
        <v-btn text>Hero</v-btn>
        <v-btn text>List</v-btn>
        <v-btn text>CTA block</v-btn>
        <v-btn text>Footer</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <slot></slot>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style lang='scss' >
.navbar {
  .v-toolbar__content,
  .logo {
    padding: auto 0 !important;
  }
  .links {
    margin: auto 100px;
  }
}
</style>