<template>
  <footer class="bg-dark">
    <div class="container">
      <div>2022 &copy; Чайная пагода</div>
      <div>+7(961)345-22-45</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  margin-top: 40px;
  padding: 15px;
  color: #faf0e6 !important;
  height: 100px;
}

footer .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>