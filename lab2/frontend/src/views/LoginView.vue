<template>
  <div class="d-flex row">
    <ImageBrand></ImageBrand>

    <div class="col-lg-6 col-md-6 col-sm-12 d-flex" style="height: 100vh">
      <div class="col-12 d-flex flex-column justify-content-center align-items-center">
        <div class="title">Вход</div>

        <Form></Form>

      </div>

    </div>
  </div>
</template>

<script>
import Form from "@/components/LoginPage/Form";
import ImageBrand from "@/components/LoginPage/ImageBrand";

export default {
  name: "LoginView",
  components: {ImageBrand, Form}
}
</script>

<style scoped>

.title {
  font-weight: bolder;
  font-size: x-large;
  margin-bottom: 20px;
  font-family: "Andale Mono";
}
</style>