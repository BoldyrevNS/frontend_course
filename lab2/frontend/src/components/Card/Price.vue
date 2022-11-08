<template>
  <div class="price">{{price}} Р/ш</div>
</template>

<script>
export default {
  name: "Price",
  props: {
    price: String
  }
}
</script>

<style scoped>

.price {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: bolder;
  font-size: larger;
}

.price {
  font-weight: bold;
  font-size: larger;
}

</style>