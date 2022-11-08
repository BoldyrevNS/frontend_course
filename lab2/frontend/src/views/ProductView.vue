<template>
  <div>
    <Title title="Шаулинь"></Title>
    <div class="container d-flex flex-row mt-2 row">
      <LeftMenu></LeftMenu>

      <div class="content d-flex flex-column col-md-9">
        <Product v-bind:product="product"></Product>
        <Description v-bind:description="description" v-bind:character="character"></Description>
      </div>

    </div>
  </div>
</template>

<script>
import Title from "@/components/ProductPage/Title";
import LeftMenu from "@/components/Menu/LeftMenu";
import Product from "@/components/ProductPage/Product";
import Description from "@/components/ProductPage/Description";

export default {
  name: "ProductView",
  components: {Description, Product, LeftMenu, Title},
  data() {
    return {
      product: {
        title: "Шаулинь",
        image: "/images/product-icon-full/tovar.jpg",
        status: "Достаточно",
        rating: -1,
        price: "400"
      },

      description: [
        "Ту Линь \"Фэнхуан Чжуань Ча\": 100 гр., 2015 год",
        "Производитель: Ту Линь / Tu Lin /",
        "Классический сорт крепкого черного пуэра. При этом, абсолютно лишен «сырого» вкуса,\n" +
        "свойственного недорогим плиткам крепкого пуэра.",
        "Цена указана за 1 шт"
      ],

      character: [
        "Вид пуэра: черный"
      ]
    }
  }
}
</script>

<style scoped>

</style>