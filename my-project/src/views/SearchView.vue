<template>
  <main class="main-content">
    <form class="search-field">
      <div class="row mx-auto search-bar-line">
        <input type="search" class="search-bar" name="q">
        <button class="search-bar-button"><b>Поиск</b></button>
      </div>
      <div>
        <label class="search-bar-label"><b>Искать рисунки, загруженные с </b></label>
        <input type="date" class="pick-date" name="date-from">
        <label class="search-bar-label"><b> по </b></label>
        <input type="date" class="pick-date" name="date-to">
      </div>
    </form>
    <section class="row mx-auto">
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/2.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/1.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/0.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/4.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/3.jpg">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/2.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/1.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/0.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/4.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/3.jpg">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/2.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="gallery-illust-container">
          <a href="#">
            <img class="gallery-illust-img" src="../img/1.png">
            <figcaption>
              Название рисунка
              <p>Автор</p>
            </figcaption>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "SearchView"
}
</script>

<style scoped>
div .row{
  margin-left: 0;
  margin-right: 0;
}
main.main-content{
  background-color: #00174a;
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
.main-content-gallery .gallery-illust-container img {
  height: 200px;
}
figure.gallery-illust{
  text-align: center;
  width: 10%;
}
img.gallery-illust-img{
  max-width: 100%;
  height: 200px;
}
form.search-field{
  width: 100%;
  padding: 10px;
  display: inline-block;
}
div.search-bar-line{
  margin-bottom: 15px;
}
input.search-bar{
  width: 90%;
  background-color: #06357a;
  border-color: royalblue;
  color: white;
}
button.search-bar-button{
  width: 10%;
  background-color: cyan;
  border-color: royalblue;
}
label.search-bar-label{
  color: white;
}
a:link{
  text-decoration: none;
}
</style>
