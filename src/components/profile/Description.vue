<template>
  <div class="description">
    <v-row class="d-flex justify-space-between">
      <v-col cols="8">
        <v-card height="297" flat>
          <div class="d-flex flex-column align-content-space-betwee">
            <div>
              <v-card-title class="font-weight-bold pb-5 custom-title">Executor</v-card-title>

              <v-list class="custom-list" height="180px">
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
                <v-list-item dense>model: Executor-class star dreadnought</v-list-item>
              </v-list>

              <!-- <v-card-subtitle>model: Executor-class star dreadnought</v-card-subtitle>
              <v-card-subtitle>manufacturer: Kuat Drive Yards, Fondor Shipyards</v-card-subtitle>
              <v-card-subtitle>starship_class: Star dreadnought</v-card-subtitle>-->
            </div>
            <v-spacer />
            <v-card-actions>
              <v-btn x-large text class="primary--text buttom">COPY API URL</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-spacer />
      <v-col height="297">
        <v-card
          v-ripple="{ 'center': true }"
          :class="` 'secondary round_square white--text d-flex flex-column align-self-end
                   justify-end `"
        >
          <div class="ship-title">EX</div>
          <div class="ship-subtitle">MGLT:40</div>
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
      width: 339px !important;
      height: 297px !important;
      margin: 0 0 0 auto;
      text-decoration: none;
      padding: 34px 40px !important;
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
  }
}
</style>