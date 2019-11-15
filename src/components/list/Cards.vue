<template>
  <div>
    <v-container class="cards">
      <v-row>
        <v-col cols="4" v-for="ship in ships" :key="ship">
          <v-card flat>
            <v-hover v-slot:default="{ hover }">
              <v-card
                @click="openProfile(12)"
                color="black"
                v-ripple="{ 'center': true }"
                :class="` ${hover ? 'primary': 'grey darken-4' } round_square white--text d-flex flex-column
                   justify-end `"
              >
                <v-btn
                  v-show="hover"
                  class="mx-2"
                  fab
                  small
                  dipressed
                  absolute
                  top
                  right
                  color="white ma-10 "
                >
                  <v-icon dark>mdi-swap-horizontal</v-icon>
                </v-btn>
                <div class="ship-title">EX</div>
                <div class="ship-subtitle">MGLT:40</div>
              </v-card>
            </v-hover>

            <v-list class="shipinfo text-uppercase">
              <v-list-item class="font-weight-bold">Name</v-list-item>
              <v-list-item>cr:</v-list-item>
              <v-list-item>crew:</v-list-item>
              <v-list-item>psngs:</v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-btn x-large class="view-more" dark>
          VIEW MORE
          <v-spacer />
          <v-icon right>mdi-cached</v-icon>
        </v-btn>
      </v-row>
    </v-container>
  </div>
  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      ships: [1, 2, 3, 4, 5, 6]
    };
  },
  methods: {
    openProfile(id) {
      this.$router.push({ name: "profile", params: { id: id } });
    }
  }
};
</script>

<style lang='scss'>
.cards {
  .round_square {
    border-radius: 11px !important;
    height: 220px;
    // width: 233px;
    text-decoration: none;
    padding: 12px !important;
    background: #212121;
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
  .ship-subtitle,
  .ship-title {
    text-decoration: none !important;
  }
  .shipinfo {
    * {
      font-size: 18px;
      line-height: 21px;
    }
  }
  .view-more {
    width: 238px;
    z-index: 2;
  }
}
</style>