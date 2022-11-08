<template>
  <div class="title">
    <div>{{title}}</div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
}
</script>

<style scoped>

.title {
  background-color: #f9f9f9;
  padding: 20px 0 0 30px;
  font-size: xx-large;
  height: 110px;
}

</style>