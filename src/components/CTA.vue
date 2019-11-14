<template>
  <v-card class="cta d-flex justify-center" height="497" dark>
    <div class="d-flex align-center justify-space-between">
      <form class="d-flex flex-column flex-no-wrap justify-space-between" width="250">
        <input type="text " class="input" placeholder="EMAIL" v-model="credentials.email" />
        <input type="text " class="input" placeholder="PHONE" v-model="credentials.phone" />

        <v-btn x-large class="button" @click="handleSubmit()" left>
          GET YOUR 20% OFF COUPON
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </form>
      <slot></slot>
    </div>
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
  background: #0066ff !important;
  width: 1270px !important;
  height: 497px !important;
  margin: 100px 0;
  border-radius: 20px !important;

  .input {
    background: white;
    color: black;
    width: 524px;
    height: 84px;
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
</style>