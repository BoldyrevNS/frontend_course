<template>
  <div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row flex-wrap">
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" v-for="product in listProduct">
          <Product :title=product.name
                   :price=product.price
                   :image=product.image
                   :status=product.status
                   :rating=product.rating>
          </Product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/HomePage/Product";

export default {
  name: "CatalogProduct",
  components: {Product},

  data() {
    return {
      listProduct: [
        {
          name: "Шу Пуэрль Ту линь \"Фэнхуан Чжуань ча\", 100г",
          rating: 4,
          status: 'Достаточно',
          price: "600",
          image: "images/product-icon/tovar1.jpg"
        },

        {
          name: "Шу Пуэрль Ту линь \"Фэнхуан Чжуань ча\", 100г",
          rating: 5,
          status: 'Нет в наличии',
          price: "600",
          image: "images/product-icon/tovar1.jpg"
        },

        {
          name: "Чай \"Фэнхуан Чжуань ча\", 100г",
          rating: 4,
          status: 'Много',
          price: "600",
          image: "images/product-icon/tovar1.jpg"
        }
      ]
    }
  },

  methods: {}
}
</script>

<style scoped>


</style>