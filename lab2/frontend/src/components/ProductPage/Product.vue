<template>
  <div class="card card-main">
    <div class="d-flex flex-row row">

      <div class="d-flex col-lg-6 col-md-12 col-sm-12 col-xs-12">
        <div class="test-wrap d-flex justify-content-center align-items-center"
             style="overflow: hidden;">
          <img v-bind:src=product.image>
        </div>
      </div>

      <div class="d-flex flex-column col-lg-6 col-md-12 col-sm-12 justify-content-start"
           style="padding: 30px;">

        <Rating v-bind:rating=product.rating></Rating>

        <div class="title">{{ product.title }}</div>
        <Price v-bind:price="product.price"></Price>

        <Status v-bind:status=product.status></Status>

        <Counter></Counter>

        <div>
          <button class="btn btn-dark submit" v-on:click="addToCart">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "@/components/Card/Rating";
import Status from "@/components/Card/Status";
import Counter from "@/components/Card/Counter";
import Price from "@/components/Card/Price";

export default {
  name: "Product",
  components: {Price, Counter, Status, Rating},
  props: {
    product: Object,
  },

  methods: {
    addToCart() {
        let num = document.getElementById('count_input').value
      alert("Добавили товар в корзину: " + num)
    }
  }
}
</script>

<style scoped>
.card-main {
  padding: 40px;
  margin: 3% 0 0 3%;
}

.card-main .title {
  margin: 10px 10px 10px 0;
  font-size: large;
}

.ratings i {
  color: #cecece;
  font-size: 14px;
}


.test-wrap {
  object-fit: cover;
  width: 100%;
  height: 85%;
}

</style>
