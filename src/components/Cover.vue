<template>
  <div class="cover white--text align-end">
    <div class="black-rect align-self-start"></div>
    <div class="cover-content align-center">
      <img class="img" src="../assets/head.svg" alt="attaker head" />
      <div class="cover-heading">May the force be with you</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Archivo+Black&display=swap");

.cover {
  display: flex;
  height: 582px;
  font-family: "Archivo Black";
  text-transform: uppercase;
  .cover-content {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    width: 100%;
    top: 18px;
    .img,
    .cover-heading {
      z-index: 2;
      line-height: 78%;
    }
    .cover-heading {
      font-size: 132px;
      max-width: 749px;
    }
  }

  .black-rect {
    position: absolute !important;
    background: black;
    width: 100%;
    z-index: 1;
    height: 477px;
    border-radius: 20px;
  }
}
</style>