<template>
  <main class="report_main_content">
      <div class="report-form-holder">
        <h3>Жалоба отправлена!</h3>
      </div>
  </main>
</template>

<script>
export default {
  name: "ReportSuccessView"
}
</script>

<style scoped>
textarea {
  resize: none;
}
h3{
  color: white;
}
div.report-form-holder{
  width: 50%;
  background-color: #0a58ca;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
main.report_main_content{
  background-color: #00174a;
}
</style>
