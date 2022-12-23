
<template>
  <div >

    <Header/>

    <div class="form">
      <h1 class="auth">Регистрация</h1>
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">
      <input type="password" placeholder="Повторите пароль">
      <a class="forgot-p" href="#"> Забыли пароль?</a>
      <button class="form-btn">Войти</button>

    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name:"Registration",
  components: {Footer, Header},
  data (){
    return{
      title:'Registration'
    }
  }
}
</script>