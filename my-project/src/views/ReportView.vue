<template>
  <main class="report_main_content">
      <div class="report-form-holder">
        <form class="report-form">
          <p>
            <input class="email" name="email" type="text" size="40" placeholder="Введите e-mail">
          </p>
          <p>
            <textarea class="report_message" name="report_message" cols="40" rows="20" placeholder="Ваша жалоба"></textarea>
          </p>
          <button class="report-send-button" type="button" v-on:click="$data.send_event()"><b>Отправить</b></button>
        </form>
      </div>
  </main>
</template>

<script>
export default {
  name: "ReportView",
  data(){
    return{
      send_event: function (){
        const email = document.getElementsByClassName("email")[0].value;
        const report = document.getElementsByClassName("report_message")[0].value;
        const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        if(report.length>0) {
          if (email.match(EMAIL_REGEXP)) {
            let req = new XMLHttpRequest();
            req.responseType = 'json';
            req.open("GET", '/api/account/check_email/' + email, true);
            req.send();
            req.onload = () => {
              if (req.response === 1) {
                window.location.href = "/#/report_success";
              }
              else alert("Нет пользователя с таким почтовым адресом!")
            }
          }
          else alert("Некорректный почтовый адрес!");
        }
        else alert("Введите описание своей жалобы!");
      }
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
form.report-form{
  text-align: center;
  margin: 0 auto;
}
div.report-form-holder{
  width: 50%;
  background-color: #0a58ca;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
}
input.email{
  width: 80%;
}
textarea.report_message{
  width: 80%;
}
button.report-send-button{
  width: 10%;
  background-color: cyan;
  border-color: royalblue;
}
main.report_main_content{
  background-color: #00174a;
}
</style>
