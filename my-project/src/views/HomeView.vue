<template>
  <main class="main-content">
    <Gallery/>
  </main>
</template>

<script>
import Gallery from "../components/Gallery/Gallery";
export default {
  name: "HomeView",
  components: {Gallery}
}
</script>

<style scoped>
.main-content-gallery .gallery-illust-container img {
  height: 200px;
}
</style>
