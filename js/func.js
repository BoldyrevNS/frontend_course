let flag = false;


function checkAuto()
{
    alert("Hello word");
    return false;
}

function register() {
    window.location.href = "DnDHeroes.html";
};

function login() {
  let flag = true;




  let  fields = document.querySelectorAll('.mb-4');

  fields.forEach((element, key) => {
    document.querySelectorAll('.mb-4 .error')[key].innerHTML ='';
    let inputField = element.querySelector('.input input');
    alert(inputField.value.length);
    if (inputField.value.length === 0){
      flag = false;
      let errorField = element.querySelector('.error');
      errorField.innerHTML = 'Заполните поле';
      document.querySelectorAll('.mb-4 .error')[key] = errorField;
    }
  });

  if (flag === true){
    register();
}
  
  /*for (let field in fields){
    alert(field)
    let inputField = field.querySelector('.input');
    alert(inputField.length)
    if (inputField.length === 0){
      flag = false;
      alert("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
      let errorField = field.getElementsByClassName('error')[0];
      errorField.innerHTML = "Заполните поле";
    }
  }
  if (flag){
    this.register();
  } */  
};
