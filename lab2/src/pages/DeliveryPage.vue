<template>
  <section class="cake bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-uppercase text-white mb-5 mt-5">Целые торты</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cake-cherry.jpg" class="card-img-top" alt="Торт вишневый">
            <div class="card-body">
              <h5 class="card-title">Вишневый торт</h5>
              <p class="card-text">Вес: 1800<br>Цена: 2160₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cake-chocolate.jpg" class="card-img-top" alt="Торт шоколадный">
            <div class="card-body">
              <h5 class="card-title">Шоколадный торт</h5>
              <p class="card-text">Вес: 1105<br>Цена: 2640₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cake-lemon.jpg" class="card-img-top" alt="Пирог лимонный">
            <div class="card-body">
              <h5 class="card-title">Лимонный пирог</h5>
              <p class="card-text">Вес: 1800<br>Цена: 2240₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="coffee bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-uppercase text-white mb-5 mt-5">Кофе в зернах</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/coffee-dekaf.jpg" class="card-img-top" alt="Кофе Декаф">
            <div class="card-body">
              <h5 class="card-title">Кофе Декаф</h5>
              <p class="card-text">Вес: 200<br>Цена: 1000₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/coffee-maragod.jpg" class="card-img-top" alt="Кофе Марагод">
            <div class="card-body">
              <h5 class="card-title">Кофе Марагод</h5>
              <p class="card-text">Вес: 200<br>Цена: 1200₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/coffee-dekaf.jpg" class="card-img-top" alt="Кофе Куба">
            <div class="card-body">
              <h5 class="card-title">Кофе Куба</h5>
              <p class="card-text">Вес: 200<br>Цена: 1000₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="cups bg-black">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="text-uppercase text-white mb-5 mt-5">Стаканы</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cup-05.jpg" class="card-img-top" alt="Эко-стакан 0,5л">
            <div class="card-body">
              <h5 class="card-title">Эко-стакан 0,5л</h5>
              <p class="card-text">Вес: 200<br>Цена: 2000₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cup-04.jpg" class="card-img-top" alt="Эко-стакан 0,4л">
            <div class="card-body">
              <h5 class="card-title">Эко-стакан 0,4л</h5>
              <p class="card-text">Вес: 200<br>Цена: 1800₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 col-sm-12 mb-5">
          <div class="card" style="width: 18rem;">
            <img src="../assets/cup-03.jpg" class="card-img-top" alt="Эко-стакан 0,3л">
            <div class="card-body">
              <h5 class="card-title">Эко-стакан 0,3л</h5>
              <p class="card-text">Вес: 200<br>Цена: 1600₽</p>
              <a href="#" class="btn btn-secondary">Купить</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <router-view/>
</template>

<script>


export default {
  components: {
  }

}

export class DeliveryVue {
}
</script>