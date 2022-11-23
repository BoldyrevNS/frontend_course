<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="logo">
          <a href="/">
            <img src="../../img/logo.png">
          </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'search'}">
                <img src="../../img/search_icon.png">
                Поиск
              </router-link>
            </li>
            <!--<li class="nav-item">
              <a class="nav-link" href="#">
                <img src="../../img/upload_icon.png">
                Загрузить
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img src="../../img/settings_icon.png">
                Настройки
              </a>
            </li>
            -->
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
nav.navbar{
  padding: 0;
}
header nav ul {
  list-style: none;
  color: #fff;
  padding: 0;
  margin: 0;
}
ul.navbar-nav{
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
a.nav-link{
  text-decoration: none;
  font-size: large;
  color: white;
}
li.navbar-item{
  margin: 10px;
}
ul.navbar-nav{
  background-color: #0d6efd;
}
header .logo img {
  width: 150px;
  margin-right: 10px;
}
a.nav-link{
  color: white;
}
a.nav-link:hover{
  color: cyan;
}
div.container-fluid{
  padding: 0;
  margin: 0;
  background-color: #0a53be;
}
</style>
