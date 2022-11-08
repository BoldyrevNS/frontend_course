<template>
  <form class="col-7" method="post" @submit="login">
    <div class="wrap-input validate-input">
      <input class="input-100" name="email" v-model="email" type="text" placeholder="Email">
      <div class="errors">{{ errors.email }}</div>
    </div>

    <div class="wrap-input validate-input">
      <input class="input-100" name="password" v-model="password" type="password" placeholder="Password">
      <div class="errors">{{ errors.password }}</div>
    </div>

    <div class="container-login100-btn">
      <button class="btn login-btn" type="submit">Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",

  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login(event) {
      alert("click")
      this.validate()
      event.preventDefault()
    },
    validate() {
      for (let errorsKey in this.errors) {
        this.errors[errorsKey] = ''
      }
      if (this.email.trim().length === 0) {
        this.errors.email = 'Заполните Email.'
      }
      if (this.password.trim().length === 0) {
        this.errors.password = 'Заполните Пароль.'
      }
    }
  }
}
</script>

<style scoped>
.login-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  width: 100%;
  color: #fff;
  background-color: #6675df;
  border-radius: 10px;
  margin-top: 20px;
}

.login-btn:hover {
  background-color: black;
  color: white;
}

.wrap-input {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 80px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid #e6e6e6;
}

input.input-100 {
  height: 100%;
  transition: all .4s;
}

.input-100 {
  display: block;
  width: 100%;
  background: 0 0;
  color: #555;
  line-height: 1.2;
  padding: 0 26px;
}

input {
  outline: none;
  border: none;
  overflow: visible;
}

.errors {
  color: red;
}

</style>