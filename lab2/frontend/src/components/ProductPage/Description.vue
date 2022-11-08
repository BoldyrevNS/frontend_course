<template>
  <div class="description">
    <div>
      <div class="title">Описание</div>

      <div class="content">
        <div v-for="text in description">
          <div>{{text}}</div>
        </div>
      </div>
    </div>

    <div>
      <div class="title">Характеристики</div>

      <div class="content">
        <div v-for="text in character">
          <div>{{text}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: Array,
    character: Array
  }
}
</script>

<style scoped>
.description {
  margin: 5% 5% 5% 5%;
}

.description .title {
  font-size: x-large;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}

.description .content {
  padding: 1% 4% 4% 0;
  font-family: "Gill Sans";
  font-size: large;
}
</style>