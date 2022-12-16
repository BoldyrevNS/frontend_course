<template>
  <div class="header_line">
    <div class="container">
      <ul>
        <li v-for="item in items" :key="item.message">
         <a :href="`${$store.getters.getServerUrl}`+item.href">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TheHeaderLine",
  data() {
    return {
      items: {}
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/head_line')
        .then(response => (this.items = response.data));
  }
}
</script>

<style scoped>

</style>