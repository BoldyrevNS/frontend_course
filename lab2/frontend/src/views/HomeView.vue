<template>
    <div class="container d-flex flex-row mt-2 row">
      <LeftMenu></LeftMenu>

      <div class="content d-flex flex-column col-md-9">
        <HomePresent></HomePresent>

        <CatalogImgCard></CatalogImgCard>


        <div class="d-flex flex-column">
          <TopMenu></TopMenu>
          <CatalogProduct></CatalogProduct>
        </div>

      </div>
    </div>
</template>

<script>
import LeftMenu from "@/components/Menu/LeftMenu";
import CatalogImgCard from "@/components/Catalog/CatalogImgCard";
import CatalogProduct from "@/components/Catalog/CatalogProduct";
import TopMenu from "@/components/Menu/TopMenu";
import HomePresent from "@/components/HomePage/HomePresent";
export default {
  name: "MainPage",
  components: {HomePresent, TopMenu, CatalogProduct, CatalogImgCard, LeftMenu}
}
</script>

<style scoped>
</style>