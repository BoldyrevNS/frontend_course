<template>
  <nav class="nav navbar-expand-lg py-2 navbar-dark bg-dark text-bg-light">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="#navbarSupportedContent">
      <ul class="navbar-nav justify-content-between container">
        <li class="nav-item dropdown col-2">
          <a class="nav-link dropdown-toggle" href="#" id="dropdownCatalog" role="button"
             data-bs-toggle="dropdown" aria-expanded="false">
            Каталог
          </a>

          <DropdownMenu></DropdownMenu>

        </li>

        <li class="nav-item">
          <a class="nav-link menu-text" href="#">О компании</a>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-text" href="#">Акции</a>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-text" href="#">Корпоративные подарки</a>
        </li>

        <li class="nav-item">
          <a class="nav-link menu-text" href="#">Заказ и доставка</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link menu-text" href="#">Оптовикам</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import DropdownMenu from "@/components/Menu/DropdownMenu";
export default {
  name: "CatalogNavbar",
  components: {DropdownMenu}
}
</script>

<style scoped>

</style>