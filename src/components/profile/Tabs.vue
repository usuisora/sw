<template>
  <v-container class="tabs">
    <v-row height="250">
      <v-col cols="4">
        <v-card height="250" class="custom-card d-flex flex-column">
          <v-card-title class="custom-title font-weight-bold black--text">passengers</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">29144</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="250" class="custom-card d-flex flex-column">
          <v-card-title class="custom-title font-weight-bold black--text">passengers</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">29144</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="250" class="custom-card d-flex flex-column">
          <v-card-title class="custom-title font-weight-bold black--text">passengers</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">29144</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card height="250" class="custom-card d-flex flex-column">
          <v-card-title class="custom-title font-weight-bold black--text">passengers</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">29144</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
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
    text-transform: uppercase;
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