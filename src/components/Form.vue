<template>
  <v-card class="form d-flex justify-center" height="497" dark>
    <div class="d-flex align-center justify-space-between">
      <form class="d-flex flex-column flex-no-wrap justify-space-between" width="250">
        <input type="text " class="input" placeholder="EMAIL" />
        <input type="text " class="input" placeholder="PHONE" />
        <v-btn x-large class="button">
          GET YOUR 20% OFF COUPON
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>
      </form>
      <v-img class="img" src="../assets/starship.svg" alt="ship" />
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.form {
  background: #0066ff !important;
  width: 1270px !important;
  height: 497px !important;
  margin: 100px 0;
}
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
}
</style>