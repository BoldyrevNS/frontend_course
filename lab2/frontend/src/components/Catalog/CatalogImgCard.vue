<template>
  <div>
    <div class="d-flex flex-column col-12">
      <div class="middle-block d-flex flex-row col-12 flex-wrap">
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="back-img">
            <img src="images/card-icon/trava.jpg">
            <div class="caption">Травы и иван-чай</div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <div class="back-img">
            <img src="images/card-icon/ulun.jpg">
            <div class="caption">Улуны</div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6" style="padding-right: 0">
          <div class="back-img">
            <img src="images/card-icon/coffe.jpg">
            <div class="caption">Кофе</div>
          </div>
        </div>


        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <div class="back-img">
            <img src="images/card-icon/tea.jpg">
            <div class="caption">Зеленый чай</div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="back-img">
            <img src="images/card-icon/tea-with-dopant.jpg">
            <div class="caption">Чай с добавками</div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6" style="padding-right: 0">
          <div class="back-img">
            <img src="images/card-icon/present.jpg">
            <div class="caption">Подарки</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogImgCard"
}
</script>

<style scoped>
.back-img {
  position: relative;
  height: 200px;
}

.back-img img {
  object-fit: cover;
  width: 100%;
  height: 200px;
}

.back-img .caption {
  position: absolute;
  top: 150px;
  left: 10px;
  padding: 0 10px 0 10px;
  color: white;
  background: #4d2d22;
  font-size: large;
}

.middle-block div {
  padding: 3px;
  opacity: 1;
}

.middle-block div div:hover img{
  opacity: 0.8;
}

</style>