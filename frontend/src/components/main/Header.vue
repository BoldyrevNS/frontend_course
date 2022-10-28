<template>
  <div>
    <header>
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                  data-target="#collapse-target">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link class="navbar-brand" :to="{name: 'home'}">
            <img src="https://i.pinimg.com/736x/da/c8/0f/dac80fbfa765803b4bca39cf7aa5b0b7.jpg" alt="Logo"
                 width="50"
                 height="44" class="img-fluid rounded-circle">
          </router-link>

          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <router-link class="nav-link active" :to="{name: 'home'}" aria-current="page">Главная</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" :to="{name:'Price'}">Цены</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>