<template>
  <div id="app">
    <TheHeader/>
    <TheHeaderLine/>
    <TheMainImage/>
    <TheInfoHome/>
    <TheFooter/>
    <TheDownFooter/>
  </div>
</template>

<script>
import TheInfoHome from "@/components/Main/TheInfoHome";
import TheMainImage from "@/components/Main/TheMainImage";
import TheDownFooter from "@/components/Main/TheDownFooter";
import TheFooter from "@/components/Main/TheFooter";
import TheHeader from "@/components/Main/TheHeader";
import TheHeaderLine from "@/components/Main/TheHeaderLine";

export default {
  name: "HomeView",
  components: {
    TheHeaderLine,
    TheMainImage, TheInfoHome, TheDownFooter,
    TheFooter,
    TheHeader
  }
}
</script>

<style>

</style>