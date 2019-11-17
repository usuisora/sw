<template>
  <div class="description">
    <v-row class="d-flex justify-space-between">
      <v-col
        height="297"
        cols="12"
        lg="4"
        md="6"
        sm="6"
        class="d-flex order-0 order-sm-2 justify-center justify-md-end"
      >
        <v-card
          v-ripple="{ 'center': true }"
          :class="` 'secondary round_square white--text d-flex flex-column align-self-end
                   justify-end `"
        >
          <div class="ship-title">{{this.starship.name.split('-').join('').slice(0,2)}}</div>
          <div class="ship-subtitle">MGLT:{{this.starship.MGLT}}</div>
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
                <v-list-item dense>Model:{{this.starship.model}}</v-list-item>
                <v-list-item dense>Manufacturer: {{this.starship.manufacturer}}</v-list-item>
                <v-list-item dense>Starship_class:{{this.starship.starship_class}}</v-list-item>
              </v-list>
            </div>

            <v-spacer />
            <v-card-actions>
              <v-btn
                x-large
                text
                class="primary--text buttom"
                @click="Clipboard.writeText(123)"
              >COPY API URL</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <Tabs :starship="starship" />
  </div>
</template>

<script>
import Tabs from "./Tabs";
export default {
  data() {
    return {
      starship: null
    };
  },
  props: ["id"],
  components: {
    Tabs
  },
  methods: {
    async getStarship() {
      try {
        let response = await this.$http.get(
          "https://swapi.co/api/starships/" + this.id + "/"
        );
        let body = await response.body;
        this.starship = body;
      } catch (err) {
        this.$router.push({ name: "error" });
      }
    }
  },
  async created() {
    let starships = JSON.parse(localStorage.getItem("starships"));
    if (starships) {
      let filtered = starships.filter(starship => starship.id == this.id);
      if (filtered.length) {
        // console.log(filtered[0]);
        this.starship = filtered[0];
        return;
      }
    }
    await this.getStarship();
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
      max-width: 339px;
      height: 297px !important;
      text-decoration: none;
      padding: 48px 40px !important;
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

@media (max-width: 300px) {
  .profile .description {
    margin: 40px auto !important;
    .round_square {
      max-width: 290;
    }
  }
}
</style>