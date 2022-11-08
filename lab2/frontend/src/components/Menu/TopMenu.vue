<template>
  <div style="padding-top: 5%; padding-bottom: 5%">
    <ul class="nav top-block">
      <li class="nav-item" style="text-decoration: underline ">
        <a class="nav-link" aria-current="page" href="#">Хит</a>
      </li>

      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="#">Советуем</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Новинки</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">Акции</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopMenu"
}
</script>

<style scoped>
.top-block li a {
  color: black;
  font-size: large;
  font-weight: bold;
  opacity: 1;
}

.top-block a:hover {
  color: #555;
}
</style>