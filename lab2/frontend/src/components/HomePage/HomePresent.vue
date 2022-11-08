<template>
  <div class="d-flex flex-row">
    <Title></Title>

    <ImageBrand></ImageBrand>
  </div>
</template>

<script>
import Title from "@/components/HomePage/Title";
import ImageBrand from "@/components/HomePage/ImageBrand";
export default {
name: "HomePresent",
  components: {ImageBrand, Title}
}
</script>

<style scoped>

</style>