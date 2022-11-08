<template>
  <nav class="nav navbar-expand-lg container" style="align-items: center; margin-bottom: 10px">
    <div class="navbar-brand img-wrap" href="#">
      <img src="images/brand-icon/tea_logo.png">
      <router-link class="nav-link" :to="{name: 'HomePage'}"></router-link>
    </div>

    <div class="col-md-5 col-lg-5 search-wrap" style="padding-left: 30px">
      <form class="form-check-inline" role="search" style="width: 90%; margin: 0 auto">
        <div class="input-group">
          <input class="form-control search-input" type="text" placeholder="Поиск">
          <button class="btn btn-outline-secondary" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>

    <div class="col-lg-5 col-md-5 d-flex flex-row justify-content-end align-items-center">
      <div class="container d-flex flex-row align-items-center ">
        <div class="d-flex flex-column col-6 d-none d-lg-block" style="padding-left: 5%;">
          <div class="d-flex align-bottom"><b>+7-950-477-23-74</b></div>
          <div>Заказать звонок</div>
        </div>

        <div class="col-6 d-flex flex-row justify-content-around">
          <router-link class="nav-link" :to="{name: 'Login'}">
            <img src="images/navbar-icon/lock.svg">
          </router-link>

          <router-link class="nav-link" :to="{}">
            <img src="images/navbar-icon/heart.svg">
          </router-link>

          <router-link class="nav-link" :to="{}">
            <img src="images/navbar-icon/cart.svg">
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavbar",
  methods: {
  }
}
</script>

<style scoped>

.img-wrap img {
  object-fit: cover;
  width: 150px;
  height: 100%;
}
</style>