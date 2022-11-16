<template>
  <div>
    <TheHeader/>
    <TheHeaderLine/>
    <div class="home">
      <div class="container" data-entity="parent-container">
        <TheCatalogSort
            @sort='get_sort_field'
        />
        <div class="cards">
          <TheProductCard
              v-for="product in products"
              :key="product.id"
              :product_data="product"
          />
        </div>
      </div>
    </div>
    <TheFooter/>
    <TheDownFooter/>
  </div>
</template>

<script>
import TheProductCard from "@/components/Catalog/TheProductCard";
import axios from "axios";
import TheHeader from "@/components/Main/TheHeader";
import TheFooter from "@/components/Main/TheFooter";
import TheDownFooter from "@/components/Main/TheDownFooter";
import TheHeaderLine from "@/components/Main/TheHeaderLine";
import TheCatalogSort from "@/components/Catalog/TheCatalogSort";

export default {
  name: "TheCatalog",
  components: {TheCatalogSort, TheHeaderLine, TheDownFooter, TheFooter, TheHeader, TheProductCard},
  props: {},
  data() {
    return {
      products: {},
      sort_field: ""
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/products')
        .then(response => (this.products = response.data));
  },
  computed: {},
  methods: {
    get_sort_field(data) {
      this.sort_field = data.sort_value
      this.sort();
      console.log(this.sort_field)
    }
    ,
    sort() {
      if (this.sort_field === "name") {
        this.products.sort((a, b) => a.name < b.name ? 1 : -1);
      }
      if (this.sort_field === "star") {
        this.products.sort((a, b) => a.star < b.star ? 1 : -1);
      }
    }
    ,

  }
}

</script>

<style>
</style>