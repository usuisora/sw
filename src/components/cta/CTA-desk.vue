<template>
  <v-card class="cta d-flex justify-center align-center" dark height="497">
    <v-row class="d-flex align-center justify-center" height="300">
      <v-col cols="6" md="6" class="d-flex justify-center">
        <form class="form d-flex flex-column justify-space-between">
          <input type="text " class="input" placeholder="EMAIL" v-model="credentials.email" />
          <input type="text " class="input" placeholder="PHONE" v-model="credentials.phone" />
          <v-btn block x-large class="button" @click="handleSubmit()" left>
            GET YOUR 20% OFF COUPON
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </form>
      </v-col>

      <v-col cols="6" md="6">
        <v-img :src="image_src"></v-img>
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
  props: ["image_src"],
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
  position: relative;
  background: #0066ff !important;
  margin: 100px 0;
  border-radius: 20px !important;
  .form {
    position: relative;
    width: 90%;
    margin-left: 77px;
    position: relative;
  }
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

  @media (max-width: 900px) {
  }
}
</style>