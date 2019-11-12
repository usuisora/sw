<template>
  <v-container>
    <Sort />
    <v-container class="cards">
      <v-row cols="12">
        <v-col v-for="ship in ships" :key="ship">
          <v-card width="233px" class="pa-2" flat>
            <v-container
              class="head secondary round_square white--text d-flex flex-column justify-end"
            >
              <div class="ship-title">EX</div>
              <div class="ship-subtitle">MGLT:40</div>
            </v-container>
            <v-list class="shipinfo text-uppercase">
              <v-list-item class="font-weight-bold">Name</v-list-item>
              <v-list-item>cr:</v-list-item>
              <v-list-item>crew:</v-list-item>
              <v-list-item>psngs:</v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row>
      <v-col class="d-flex justify-center align-center">
        <v-btn x-large color="#212121" class="view-more" dark>
          VIEW MORE
          <v-icon right>mdi-cached</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sort from "./Sort";

export default {
  components: {
    Sort
  },
  data() {
    return {
      ships: [1, 2, 3, 4, 5, 6]
    };
  }
};
</script>

<style lang='scss'>
.round_square {
  border-radius: 11px !important;
  height: 220px;
  width: 233px;
}
.round_square:focus {
  background: #06f;
}
.ship-title {
  font-size: 45px !important;
  font-family: "Archivo Black" !important;
  line-height: 49px;
}
.ship-subtitle {
  font-size: 24px;
  line-height: 26px;
  font-family: "Archivo Black" !important;
}
.shipinfo {
  * {
    font-size: 18px;
    line-height: 21px;
  }
}
.view-more {
  width: 238px;
}
</style>