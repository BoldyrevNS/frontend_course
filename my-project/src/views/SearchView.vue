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
    <Gallery/>
  </main>
</template>

<script>
import Gallery from "../components/Gallery/Gallery";
export default {
  name: "SearchView",
  components: {Gallery}
}
</script>

<style scoped>

main.main-content{
  background-color: #00174a;
}
figcaption{
  color: white;
}
.main-content-gallery .gallery-illust-container img {
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
