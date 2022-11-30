<template>


  <div class="module calculator">
    <div class="container">
      <div class="module-caption">Калькулятор стоимости ремонта квартиры в Белгороде</div>
      <div class="calculator-body">
        <div class="row line-row">
          <div class="col-xs-12 col-sm-6 line-column">
            <div class="line h4">Тип квартиры</div>
            <div class="row">
              <div class="col-xs-12 col-md-4">
                <input id="apartment-type-1" class="hidden" name="f_ApartmentType" type="radio" data-multiplier="1"
                       value="1">
                <label class="ghost-btn" for="apartment-type-1">Новостройка</label>
              </div>
              <div class="col-xs-12 col-md-4">
                <input id="apartment-type-2" class="hidden" name="f_ApartmentType" type="radio" checked=""
                       data-multiplier="1.3" value="2">
                <label class="ghost-btn" for="apartment-type-2">Вторичка</label>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 line-column">
            <div class="line h4"><label for="calc-square-range">Площадь</label></div>
            <div class="with-base">
              <input id="calc-square-value" data-range-slider="#calc-square-range" class="font-init" type="number"
                     min="1" max="200" step="1" value="30" style="margin-right: 5px; width: 60px;" data-base-value="">
              <label class="font-init" for="calc-square-value">м<sup>2</sup></label>
            </div>
          </div>
        </div>
        <div class="row line-row">
          <div class="col-xs-12 col-sm-6 line-column">
            <div class="line h4">Вид ремонта</div>
            <div class="row">
              <div class="col-xs-12 col-md-4">
                <input id="renovate-type-1" class="hidden" name="f_RenovateType" type="radio" checked=""
                       data-multiplier="2500" value="1">
                <label class="ghost-btn" for="renovate-type-1">Косметический</label>
              </div>
              <div class="col-xs-12 col-md-4">
                <input id="renovate-type-2" class="hidden" name="f_RenovateType" type="radio" data-multiplier="3500"
                       value="2">
                <label class="ghost-btn" for="renovate-type-2">Капитальный</label>
              </div>
              <div class="col-xs-12 col-md-4">
                <input id="renovate-type-3" class="hidden" name="f_RenovateType" type="radio" data-multiplier="4500"
                       value="3">
                <label class="ghost-btn" for="renovate-type-3">Дизайнерский</label>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 line-column">
            <div class="line h4">Примерная стоимость*</div>
            <div class="line h3">
              <b><span class="js-module-calc-value">{{ rubles }}</span> руб.</b>
            </div>
            <div class="price-warning">*Стоимость работ <b>без учета материалов</b>!</div>
          </div>
        </div>
      </div>
      <div class="module-footer" style="padding-top: 30px;">
      </div>
    </div>
    <button @click="compute_cost()"> 123132 </button>
  </div>

</template>

<script>




export default {
  name: "Price",
  data(){
    return {rubles:2}
  },
  methods:{
    compute_cost(){
      this.rubles = this.rubles*2
    }

  }
}
</script>

<style>
.calculator-body {
  border: 2px solid #ccc;
  padding: 15px 30px;
  background: #f7f7f7;
}

.line-column {
  margin-top: 20px;
}

@media (min-width: 768px) {
  .line-column:last-child {
    padding-left: 45px;
  }
}

@media (min-width: 992px) {
  .line-column:last-child {
    padding-left: 75px;
  }
}

.price-warning {
  color: #878787;
}

input[type="radio"] ~ .ghost-btn {
  background-color: #fff;
  color: #ef4a23;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
  max-width: 170px;
}

input[type="radio"]:checked ~ .ghost-btn,
input[type="radio"]:checked ~ .ghost-btn:hover,
input[type="radio"]:checked ~ .ghost-btn:focus {
  background-color: #ef4a23;
  color: #fff;
}

.autoink {
  position: relative;
  overflow: hidden;
}

.ink {
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 1.0);
  border-radius: 100%;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  z-index: 20;
}

.animate {
  webkit-animation: ripple 4s linear infinite;
  -moz-animation: ripple 4s linear infinite;
  -ms-animation: ripple 4s linear infinite;
  -o-animation: ripple 4s linear infinite;
  animation: ripple 4s linear infinite;
}

@keyframes ripple {
  20% {
    opacity: 0;
    transform: scale(2.5);
  }
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>