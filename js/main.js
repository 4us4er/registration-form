let form = document.querySelector("#form");
let fullName = document.querySelector("#full-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let formButton = document.querySelector("#form-button");



form.addEventListener('submit',  (evt) => {
    evt.preventDefault();
    formValidation();
  });



function formValidation() {
  
  let fullNameValue = fullName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();



  if (fullNameValue === "") {
    setErrorFor(fullName, "Поле должно содержать полное имя пользователя и не может быть пустым.");
  }
  else if (fullNameValue.split(' ').length<=2) {
    setErrorFor(fullName, `Полное имя должно состоять из минимум двух слов."${fullNameValue}" состоит из одного слова.`);
  }  else {
    setSuccessFor(fullName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Заполните поле адрессом своей электронной почты, оно не может быть пустым.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, `Адресс электронной почты должен содержать символ "@". В адресе ${emailValue} отсутствует символ "@".`);
  } else {
    setSuccessFor(email);
  }


  if (passwordValue === "") {
    setErrorFor(password, "Введите корректный пароль, это поле не может быть пустым.");
  } else if ( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(passwordValue)) {
    setErrorFor(password, "Длина пароля должна быть от 8 символов, включать в себя специальный символ и минимум одну заглавную букву.");
  } else {
    setSuccessFor(password);
  }
if(email.classList.contains('invalid')|| fullName.classList.contains('invalid')|| password.classList.contains('invalid') ){
    formButton.disabled = true;
}
else{
    formButton.disabled = false;
}
}


function setErrorFor(input, message) {
  let inputField = input.parentElement;
  inputField.className = "input-field invalid";
  let err = inputField.querySelector(".error");
  
  err.innerText = message;
}


function setSuccessFor(input) {
  let inputField = input.parentElement;
  inputField.className = "input-field valid";
}


function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}