<template>
  <main class="main-content">
    <section class="row mx-auto">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="view-image-container">
          <img class="view-illust-img" src="../img/1.png">
        </div>
        <div class="view-image-title">
          <div>
            <a href="#">
              <img class="avatar-small" src="../img/ava.png">
            </a>
          </div>
          <div>
            <div class="view-image-title-text">
              <b><h4>Название рисунка</h4></b>
            </div>
            <div class="view-image-title-text">
              <a href="#" class="in-text-link"><h6>Имя автора</h6></a>
            </div>
          </div>
        </div>
        <div class="view-image-descr">
          Описание рисунка<br>
          Какой-то текст и бла бла бла бла бла бла бла блаааааа, куча текста крч, надо посмотреть как он будет автоматически переноситься на новую строку и будет ли вообще<br>
          <a href="#" class="in-text-link">Мб ссылки на чьи-то профили и тд</a>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
        <div class="view-image-comment">
          <div class="view-image-comment-info">
            <a href="#" class="in-text-link">Имя пользователя</a> от dd.mm.yyyy hh:mm
          </div>
          <div class="view-image-comment-text">
            Текст комментария
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "PicView"
}
</script>

<style scoped>

img.view-illust-img{
  width: 65%;
}
div.view-image-container{
  text-align: center;
}
div.view-image-title,div.view-image-descr{
  color: white;
  background-color: #24458b;
  margin: 15px 0 15px 0;
  padding: 5px 5px 5px 5px;
}

img.avatar-small{
  height: 50px;
}
div.view-image-title{
  display:flex;
  flex-flow:row;
  padding: 5px 0 5px 5px;
  margin: 15px 0 15px 0;
  line-height: 2.5;
}

div.view-image-title-text{
  margin-left: 5px;
  margin-bottom: 0;
}
h6{
  line-height: 5px;
}
div.view-image-comment-info{
  padding-left: 5px;
  background-color: #06357a;
  color: #76acbf;
}
div.view-image-comment{
  border-style: groove;
  border-color: #0a53be;
  color: white;
  margin-bottom: 15px;
}
div.view-image-comment-text{
  padding-left: 5px;
}
a.in-text-link{
  color: #86b7fe;
  text-decoration: none;
}
a.in-text-link:hover{
  color: cyan;
}
a:link{
  text-decoration: none;
}
</style>
