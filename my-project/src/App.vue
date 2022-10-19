<template>
  <div class="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer"
export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style>
@import "assets/css/bootstrap.css";
/*@import "assets/css/main.css";*/
html, body {
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
div .row{
  margin-left: 0;
  margin-right: 0;
}
main.main-content{
   background-color: #00174a;
 }

</style>
