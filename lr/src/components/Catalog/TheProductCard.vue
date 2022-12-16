<template>
  <div class="card">
    <div class="rating">
      {{ product_data.name }}
      <span v-for="item in product_data.star" :key="item.id" class="fa fa-star checked"></span>
      <span v-if="product_data.star < 5">
       <span v-for="item in (5 - product_data.star)" :key="item.id" class="fa fa-star"></span>
      </span>
    </div>
    <img :src=" require('../../assets/images/' + product_data.image) "
         alt=''>
    <div class="card__text">{{ product_data.text }}</div>

    <div class="card__form" data-entity="sku-block">
      <div class="card__radios" data-entity="sku-block">
        <li class="card__radio" title="по 50гр." v-on:click="set_price(product_data.price50)">
          <span>по 50гр.</span>
        </li>
        <li class="card__radio" title="по 100гр." v-on:click="set_price(product_data.price100)">
          <span>по 100гр.</span>
        </li>
        <li class="card__radio" title="по 250гр." v-on:click="set_price(product_data.price250)">
          <span>по 250гр.</span>
        </li>
      </div>
      <div class="card__price">
        <span>{{ price }}</span>
        <button class="card_button">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TheProductCard",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      price: this.product_data.price50
    }
  },
  methods: {
    set_price(new_price) {
      this.price = new_price;
    },
  }
}
</script>
<style>
</style>