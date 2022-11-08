<template>
  <div>
  <div class="status" v-if="status==='Достаточно' || status==='Много'">
    <i class="fa fa-check check-color"></i>
    <div>{{status}}</div>
  </div>

  <div class="status" v-if="status==='Нет в наличии'">
    <i class="fa fa-times"></i>
    <div>{{status}}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: {
    status: String
  }
}
</script>

<style scoped>
.check-color {
  color:green !important;
}

.status {
  display: inline-flex;
  flex-direction: row;
  margin: 6px 0 0 0;
  font-size: small;
}
</style>