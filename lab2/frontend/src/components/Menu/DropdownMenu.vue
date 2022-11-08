<template>
  <ul class="dropdown-menu" aria-labelledby="dropdownCatalog">
    <div class="row">
      <ul class="list-inline d-flex flex-row col-12" style="flex-wrap: wrap">

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/gift.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Подарки</a>

            <ul class="list-group list-group-flush list">
              <a class="nav-link" href="#">Универсальные подарки</a>
            </ul>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/tea.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Чай с добавками</a>

            <ul class="list-group list-group-flush list">
              <a class="nav-link" href="#">Черный чай с добавками</a>
              <a class="nav-link" href="#">Зеленый чай с добавками</a>
              <a class="nav-link" href="#">Фруктовый чай</a>
              <a class="nav-link" href="#">Чай ройбуш</a>
              <a class="nav-link" href="#">Гречишный чай</a>
            </ul>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/planttea.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Плантационный чай</a>

            <ul class="list-group list-group-flush list">
              <a class="nav-link" href="#">Черный и красный чай</a>
              <a class="nav-link" href="#">Зеленый и белый чай</a>
              <a class="nav-link" href="#">Улун</a>
              <a class="nav-link" href="#">Пуэр</a>
              <a class="nav-link" href="#">Японский чай матча</a>
            </ul>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/trava.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Травы, иван-чай, матте</a>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/coffe.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Свежеобжаренный кофе</a>

            <ul class="list-group list-group-flush list">
              <a class="nav-link" href="#">Моносорта арабики</a>
              <a class="nav-link" href="#">Ароматизированный кофе</a>
            </ul>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/sladosti.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Пряности, какао и сладости</a>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/sirop.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Сиропы</a>
          </div>
        </li>

        <li class="d-flex flex-row col-4 justify-content-center">
          <div>
            <img src="images/dropdown-menu-icon/posuda.jpg">
          </div>

          <div class="item-text d-flex flex-column">
            <a class="nav-link title" href="#">Посуда и акссесуары</a>
          </div>
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
export default {
  name: "Dropdown-menu"
}
</script>

<style scoped>

.dropdown:hover .dropdown-menu {
  width: 95vw;
  display: block;
  margin-top: 0;
}

.dropdown-menu li {
  padding: 20px 0 20px 0;
}

.item-text a{
  font-size: small;
  color: black !important;
}

.item-text {
  margin-left: 8px;
}

.list a {
  padding: 5px 0 5px 0;
}

.item-text .title{
  font-weight: bold;
}

</style>
