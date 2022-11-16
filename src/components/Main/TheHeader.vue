<template>
  <div class="header">
    <div class="container">
      <div v-on:click="goToMain()" class="left_header">
        <img class="logoimg" src="@/assets/images/logo2.png" alt="">
        <img class="logoimgBut" src="@/assets/images/logo1.png" alt="">
        <img class="logoimg" src="@/assets/images/logo3.png" alt="">
        <div class="fs-1 fw-lighter"> EVADIA</div>
      </div>
      <div class="right_header">
        <div class="info">
          <div class="big_phone fw-lighter">+7 900-000-01-01</div>
          <div class="head_mail fw-lighter">кис@you_cat_and_i_cat</div>
        </div>
        <div class="basket-h">
          <a v-on:click="goToAut()">
            <img class="btnBasket" src="@/assets/images/bascet-white.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    goToAut() {
      this.$router.push({name: 'AutView'})
    },
    goToMain() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>
</style>