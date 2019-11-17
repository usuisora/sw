<template>
  <div class="description">
    <v-row class="d-flex justify-space-between">
      <v-col
        height="297"
        cols="12"
        lg="4"
        md="6"
        sm="6"
        class="d-flex order-0 order-sm-2 justify-center justify-lg-end justify-md-end justify-xl-end justify-sm-center"
      >
        <v-card
          v-ripple="{ 'center': true }"
          :class="` 'secondary round_square white--text d-flex flex-column align-self-end
                   justify-end `"
        >
          <div class="ship-title">EX</div>
          <div class="ship-subtitle">MGLT:40</div>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        lg="8"
        md="6"
        sm="6"
        class="d-flex justify-start justify-md-start justify-sm-center"
      >
        <v-card height="297" flat>
          <div class="d-flex flex-column align-content-space-between">
            <div>
              <v-card-title class="font-weight-bold pb-5 custom-title">Executor</v-card-title>

              <v-list class="custom-list" height="180px">
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
              </v-list>
            </div>

            <v-spacer />
            <v-card-actions>
              <v-btn x-large text class="primary--text buttom">COPY API URL</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <Tabs />
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  components: {
    Tabs
  }
};
</script>

<style lang='scss'>
.profile {
  .description {
    margin-right: 46px;
    .round_square {
      border-radius: 11px !important;
      width: 100%;
      height: 297px !important;
      text-decoration: none;
      padding: 48px 40px !important;
      // margin: 0 !important;
      background: #212121;
    }
    .custom-list {
      font-size: 18px !important;
      line-height: 21px;
      color: black !important;
    }
    .custom-title,
    .button {
      font-size: 22px !important;
    }
    .ship-title {
      font-family: "Archivo Black";
      font-weight: normal;
      font-size: 45px;
      line-height: 49px;
      text-transform: uppercase;
    }
    .ship-subtitle {
      font-family: "Archivo Black";
      font-weight: normal;
      font-size: 24px;
      line-height: 26px;
      display: flex;
      text-transform: uppercase;
    }
  }
}
@media (max-width: 900px) {
  .profile .description {
    margin: 40px auto !important;
  }
}
</style>