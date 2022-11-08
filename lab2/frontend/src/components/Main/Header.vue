<template>
  <header>

    <TopNavbar></TopNavbar>
    <CatalogNavbar></CatalogNavbar>
  </header>
</template>

<script>
import DropdownMenu from "@/components/Menu/DropdownMenu";
import CatalogNavbar from "@/components/Navbar/CatalogNavbar";
import TopNavbar from "@/components/Navbar/TopNavbar";
export default {
  name: "Header",
  components: {TopNavbar, CatalogNavbar, DropdownMenu}
}
</script>

<style scoped>


</style>