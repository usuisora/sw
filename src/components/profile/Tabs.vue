<template>
  <div class="tabs">
    <v-row height="250">
      <v-col cols="12" lg="4" md="4" sm="6" v-for="item in 6 " :key="item">
        <v-card
          height="250"
          class="custom-card d-flex flex-column"
          v-ripple="{class: 'black--text '}"
        >
          <v-card-title class="custom-title font-weight-bold black--text">passengers</v-card-title>
          <v-spacer />
          <v-card-title class="value primary--text font-weight-bold">29144</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
    font-variant: small-caps;
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