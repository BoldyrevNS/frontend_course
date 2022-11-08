<template>

  <div class="ratings d-inline-block">
    <div v-if="rating === -1">
      <div class="rating-animate">
        <input type="radio" v-on:click="rate" name="rating" value="1" id="1">
        <label for="5">☆</label>
        <input type="radio" v-on:click="rate" name="rating" value="2" id="2">
        <label for="4">☆</label>
        <input type="radio" v-on:click="rate" name="rating" value="3" id="3">
        <label for="3">☆</label>
        <input type="radio" v-on:click="rate" name="rating" value="4" id="4">
        <label for="2">☆</label>
        <input type="radio" v-on:click="rate" name="rating" value="5" id="5">
        <label for="1">☆</label>
      </div>
    </div>

    <div v-else>
      <div class="d-inline-block" v-for="n in rating">
        <i class="fa fa-star rating-color"></i>
      </div>

      <div class="d-inline-block" v-for="n in 5 - rating">
        <i class="fa fa-star"></i>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: Number
  },

  methods: {
    rate(event) {
      alert("Ваша оценка " + event.currentTarget.value)
    }
  }
}
</script>

<style scoped>
.ratings i {
  color: #cecece;
  font-size: 14px;
}

.rating-color {
  color: #fbc634 !important;
}

.rating-animate {
  display: flex;
  flex-direction: row-reverse;
  justify-content: left;
}

.rating-animate > input {
  display: none
}

.rating-animate > label {
  position: relative;
  width: 1em;
  font-size: 20px;
  font-weight: 300;
  color: #FFD600;
  cursor: pointer
}

.rating-animate > label::before {
  content: "\2605";
  position: absolute;
  opacity: 0
}

.rating-animate > label:hover:before,
.rating-animate > label:hover ~ label:before {
  opacity: 1 !important
}

.rating-animate > input:checked ~ label:before {
  opacity: 1
}

.rating-animate:hover > input:checked ~ label:before {
  opacity: 0.4
}
</style>