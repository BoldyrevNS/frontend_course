<template>
  <div id="app">
    <div class="wrapper">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/style.css"
import "@/assets/styles/catalog.css"

export default {
  name: 'App',
  components: {}
}
</script>
<style>

</style>
