<template>
  <div class="big_image">
    <a v-on:click="goToCatalog()" class="button">
      Смотреть каталог
    </a>
    <div class="big_image_pictures">
      <div class="text">Лучшие сорта</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMainImage",
  methods:{
    goToCatalog() {
      this.$router.push({name: 'CatalogView'})
    },
  }
}
</script>

<style>
</style>