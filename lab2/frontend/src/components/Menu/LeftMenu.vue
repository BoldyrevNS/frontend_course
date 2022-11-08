<template>
  <div class="left-panel col-md-3">
    <ul class="list-unstyled">
      <li><a>Подарки</a></li>
      <li><a>Чай с добавками</a></li>
      <li><a>Плантационный чай</a></li>
      <li><a>Травы, иван-чай, мате</a></li>
      <li><a>Свежеобжаренный кофе</a></li>
      <li><a>Пряности, какао, сладости</a></li>
      <li><a>Травы, иван-чай, мате</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LeftMenu"
}
</script>

<style scoped>
.left-panel ul {
  margin-left: 15px;
  margin-top: 15px;
  background-color: rgb(248, 248, 249);
}

.left-panel ul li a {
  display: block;
  padding: 15px 15px;
  border-top: 1px solid #ddd;
  border-left: 3px solid transparent;
  border-right: 1px solid #ddd;
  font-size: medium;
  font-family: "Noto Sans Gunjala Gondi";
}

.left-panel ul li a:last-child {
  border-bottom: 1px solid #ddd;
}

.left-panel ul li a:hover {
  cursor: pointer;
  border-left: 3px solid #4d2d22;
  background-color: #fff;
}
</style>