<template>
  <nav class="navbar">
    <v-toolbar class="justify-center" flat height="182">
      <v-toolbar-title app>
        <v-btn class="logo white" flat large height="156">
          <img src="../assets/Logotype.svg" alt />
        </v-btn>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <slot></slot>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style >
.v-toolbar__content,
.logo {
  padding: 0 !important;
}

.logo {
  padding: auto 0 !important;
}
</style>