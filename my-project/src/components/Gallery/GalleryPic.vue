<template>
    <div class="gallery-illust-container">
      <a href="#" class="in-text-link">
        <img class="gallery-illust-img" :src="'/static/img/'+item['pic_id']+item['pic_format']" :id="item['pic_id']">
        <figcaption>
          {{item["title"]}}
          <p>{{$data.author_name}}</p>
        </figcaption>
      </a>
    </div>
</template>

<script>
export default {
  name: "GalleryPic",
  props: ["item"],
  data(){
    return{
      author_name: "",
      path: ""
    }
  },
  created() {
    let req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open("GET", '/api/profile/info/'+this.item["author_id"], true);
    req.send();
    req.onload = () => this.author_name = req.response["name"];
  }
}
</script>

<style scoped>
a:link{
  text-decoration: none;
}
figcaption{
  color: white;
}
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
