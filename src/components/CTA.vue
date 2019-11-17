<template>
  <v-card class="cta d-flex justify-center align-center" dark>
    <v-row class="d-flex flex-row align-center justify-center" height="300">
      <v-col cols="12" md="6" class="px-10 order-2 order-md-0">
        <input type="text " class="input" placeholder="EMAIL" v-model="credentials.email" />
        <input type="text " class="input" placeholder="PHONE" v-model="credentials.phone" />
        <v-btn block x-large class="button" @click="handleSubmit()" left>
          GET YOUR 20% OFF COUPON
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <slot></slot>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: "",
        phone: ""
      }
    };
  },

  methods: {
    handleSubmit() {
      if (this.credentials.email.match(/.+@.+\..+/))
        alert("submited for discount");
      else alert("!not valid address");
    }
  }
};
</script>

<style lang='scss'>
.cta {
  width: 100%;
  max-height: 497px;
  position: relative;
  background: #0066ff !important;
  margin: 200px 0 60px;
  border-radius: 20px !important;
  .input {
    background: white;
    color: black;
    height: 84px;
    width: 100%;
    padding: 22px 38px;
    font-family: Archivo Black;
    font-size: 16px;
    margin: 15px auto;
    text-transform: uppercase;
  }
  .button {
    height: 84px !important;
    margin: 15px 0;
    font-family: Archivo Black;
  }
}
@media (max-width: 935px) {
  .cta {
    max-height: 20000px;
  }
}
</style>