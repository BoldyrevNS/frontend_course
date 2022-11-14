<template>
  <section class="row mx-auto">
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" v-for="img in images_info">
      <GalleryPic :item="img"></GalleryPic>
    </div>
  </section>
</template>

<script>
import GalleryPic from "./GalleryPic";
export default {
  name: "Gallery",
  components: {GalleryPic},
  data() {
    return {
      images_info: []
    }
  },
  created() {
    this.$http.get('/gallery/list')
      .then((response) => this.images_info = response.data)
  }
}
</script>

<style scoped>

.main-content-gallery .gallery-illust-container img {
  height: 200px;
}
figcaption{
  color: white;
}
a:link{
  text-decoration: none;
}
</style>
