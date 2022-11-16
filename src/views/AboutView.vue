<template>
  <div class="about">
    <TheHeader/>
    <TheHeaderLine/>
    <TheAbout/>
    <TheFooter/>
    <TheDownFooter/>
  </div>
</template>

<script>
import TheAbout from "@/components/About/TheAbout";
import TheHeader from "@/components/Main/TheHeader";
import TheHeaderLine from "@/components/Main/TheHeaderLine";
import TheFooter from "@/components/Main/TheFooter";
import TheDownFooter from "@/components/Main/TheDownFooter";

export default {
  name: "AboutView",
  components: {TheDownFooter, TheFooter, TheHeaderLine, TheHeader, TheAbout}
}
</script>

<style scoped>

</style>