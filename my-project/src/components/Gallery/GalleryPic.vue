<template>
    <div class="gallery-illust-container">
      <a href="#" class="in-text-link">
        <img class="gallery-illust-img" src={{"../../img/"+item.pic_id+item.pic_format}}>
        <figcaption>
          {{item.title}}
          <p>Автор</p>
        </figcaption>
      </a>
    </div>
</template>

<script>
export default {
  name: "GalleryPic",
  props: ["item"]
}
</script>

<style scoped>
div.container-fluid{
  padding: 0;
  margin: 0;
  background-color: #0a53be;
}
div.gallery-illust-container{
  line-height: 1;
  text-align: center;
  background-color: #06357a;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
figure.gallery-illust{
  text-align: center;
  width: 10%;
}
img.gallery-illust-img{
  max-width: 100%;
  height: 200px;
}
</style>
