<template>
  <div id="app">
    <Header></Header>

    <main>
      <router-view/>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>


import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header";

export default {
  components: {Header, Footer}
}

</script>

<style>

</style>
