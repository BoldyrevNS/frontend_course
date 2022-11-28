<template>
  <!-- Блок авторизации -->
  <div class="container-fluid authorization mb-5 bg-black">
    <div class="row">
      <div class="col-12 mb-3">
        <h1 class="text-center text-white text-uppercase mt-5">Авторизация</h1>
      </div>

      <div class="col-4"></div>
      <div class="col-4">
        <div class="input-group flex-nowrap mb-3">
          <span class="input-group-text" id="email-wrap">📧</span>
          <input type="text"
                 class="form-control"
                 :class= "borderStyle"
                 placeholder="example@email.com"
                 aria-label="example@email.com"
                 aria-describedby="email-wrap"
                 @input="changeCurrentLogin">
        </div>
      </div>
      <div class="col-4"></div>

      <div class="col-4"></div>
      <div class="col-4">
        <div class="input-group flex-nowrap input-password mb-3">
          <span class="input-group-text" id="pass-wrap">🔑</span>
          <input type="text"
                 class="form-control"
                 :class= "borderStyle"
                 placeholder="1234567"
                 aria-label="1234567"
                 aria-describedby="pass-wrap"
                 @input="changeCurrentPassword">
        </div>
      </div>
      <div class="col-4"></div>

      <div class="col-4"></div>
      <div class="col-4 mb-3"><button id='sign-in'
                                      class="btn btn-outline-light btn-lg px-5 btn-atrz"
                                      type="submit"
                                      @click="signIn"
                                      >Войти</button></div>
      <div class="col-4"></div><div class="col-4"></div>
      <div class="col-6 mb-3"><button id="forgot-pass"
                                      class="btn btn-outline-light btn-lg px-5 btn-atrz"
                                      type="submit">Забыл пароль</button></div>
      <div class="col-4"></div>


    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      login: "admin",
      password: "admin",
      currentLogin: '',
      currentPassword: '',
      borderStyle: ''
    }
  },
  methods:{

    changeCurrentLogin(event){
      this.currentLogin = event.target.value
    },

    changeCurrentPassword(event){
      this.currentPassword = event.target.value
    },

    signIn(){
        if(this.currentLogin === this.login && this.currentPassword === this.password){
          this.borderStyle = "border border-3 border-success"
          this.$router.push({name: 'DeliveryPage'})
        } else{
          this.borderStyle = "border border-3 border-danger"
        }
    }
  }


}

</script>

<style>

</style>



