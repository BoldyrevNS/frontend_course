<template>
  <div >

    <Header/>

    <div class="form">
      <h1 class="auth">Авторизация</h1>
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">

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
  name:"Authorization",
  components: {Footer, Header},
  data (){
    return{
      title:'Authorization'
    }
  }
}
</script>