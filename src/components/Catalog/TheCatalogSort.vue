<template>
  <form class="sorts d-flex justify-content-between">
    <div>
      <select>
        <option>Сортировать</option>
        <option @click="sort(sort_value[0])">по названию</option>
        <option @click="sort(sort_value[1])">по оценке</option>
      </select>
    </div>
  </form>
</template>


<script>
export default {
  name: "TheCatalogSort",
  data() {
    return {
      sort_value: ['name', 'star']
    }
  },
  methods: {
    sort(value) {
      this.$emit('sort', {
        sort_value: value
      })
    }
  }
}
</script>

<style>
.sorts {
  padding-bottom: 20px;
}

.sorts .sorts-checkbox {
  display: flex;
}

.sorts .sorts-checkbox .sorts-item {
  margin-left: 15px;
}

.sorts select {
  padding: 0 15px;
}
</style>