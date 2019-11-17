<template>
  <div>
    <v-container class="cards" v-show="starships.length > 0">
      <v-row>
        <v-col
          class="pa-6"
          cols="12"
          md="4"
          sm="12"
          xs="12"
          v-for="starship in starships"
          :key="starship.name"
        >
          <v-card flat>
            <v-hover v-slot:default="{ hover }">
              <v-card
                @click="openProfile(starship.id)"
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
                <div class="ship-title text-uppercase">{{starship.name.slice(0,2)}}</div>
                <div class="ship-subtitle">MGLT:{{starship.MGLT}}</div>
              </v-card>
            </v-hover>

            <v-list class="shipinfo text-uppercase py-4">
              <v-list-item class="text-capitalize pl-0 fs-22 courier-bold">{{starship.name}}</v-list-item>
              <v-list-item dense class="font-weight-bold pl-0">cr:{{starship.cargo_capacity}}</v-list-item>
              <v-list-item dense class="font-weight-bold pl-0">crew:{{starship.crew}}</v-list-item>
              <v-list-item dense class="font-weight-bold pl-0">psngs:{{starship.passengers}}</v-list-item>
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
  props: ["starships"],
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