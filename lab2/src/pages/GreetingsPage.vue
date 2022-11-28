<template>
  <div class="container-fluid bg-black">
    <div class="row "><h1>  </h1></div>
    <div class="col-12 center"></div>
    <div class="col-12">
      <h1 class="text-center text-white display-1">CoffeeBean</h1>
      <p class="text-white text-center">Добро пожаловать</p>
    </div>
    <div class="container text-center">
      <button class="btn btn-outline-light btn-lg px-5 btn-atrz"
              type="submit"
              @click="this.$router.push({ name: 'AuthPage' })">Войти</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>