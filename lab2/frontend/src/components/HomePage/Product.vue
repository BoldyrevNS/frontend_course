<template>
  <div class="card card-product">
    <div class="product-box justify-content-center">
      <div class="d-inline-flex">
        <img v-bind:src="image">
      </div>

      <div class="d-inline-flex text-box">
        <div>{{title}}</div>
      </div>

      <Rating v-bind:rating=rating></Rating>
      <Status v-bind:status="status"></Status>

      <Price v-bind:price="price"></Price>

      <router-link class="stretched-link" :to="{name: 'Product'}">

      </router-link>

    </div>
  </div>
</template>

<script>
import Rating from "@/components/Card/Rating";
import Status from "@/components/Card/Status";
import Price from "@/components/Card/Price";
export default {
  name: "Product",
  components: {Price, Status, Rating},
  props: ['image', 'title', 'rating', 'status', 'price'],

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>

<style scoped>

.card-product:hover{
  transform: scale(1.1);
}

.product-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 20px auto 0;
}

.text-box {
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
}

</style>