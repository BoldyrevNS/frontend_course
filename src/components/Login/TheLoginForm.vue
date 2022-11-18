<template>
  <div class="form_auth_block">
    <div class="form_auth_block_content">
      <p class="form_auth_block_head_text">Авторизация</p>
      <form class="form_auth_style" @submit="login">
        <label>email</label>
        <input name="auth_email" placeholder="email" v-model="email">
        <div class="errors">{{ errors.email }}</div>

        <label>пароль</label>
        <input name="auth_pass" placeholder="пароль" v-model="password">
        <div class="errors">{{ errors.password }}</div>

        <button class="aut_button" type="submit">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheLoginForm",
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
      this.validate();
      event.preventDefault();
    },
    validate() {
      const reg = /^(.+)@(.+)\.(.+)$/;
      for (let errorsKey in this.errors) {
        this.errors[errorsKey] = ''
      }
      if (this.email.trim().length === 0) {
        this.errors.email = 'введите email.'
      } else if (reg.test(this.email.trim()) === false) {
        this.errors.email = 'Введите корректный e-mail';
      }
      if (this.password.trim().length === 0) {
        this.errors.password = 'введите пароль.'
      }
    }
  }
}
</script>

<style scoped>
.errors {
  color: black;
  margin-left: 10%;
}

</style>