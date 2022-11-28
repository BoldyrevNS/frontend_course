<template>
  <div id="app">
    <header-vue/>
    <router-view/>
    <footer-vue/>
  </div>

</template>


<script>
import HeaderVue from "./components/HeaderVue.vue"
import FooterVue from "./components/FooterVue.vue"


export default {
  components: {
    HeaderVue,
    FooterVue
  }

}

export class App {
}


</script>

<style lang="scss">
html, body{
  background-color: black;
}



</style>
