const form = document.querySelector('#form');
const password = document.querySelector('#password');


form.addEventListener("submit", e=>{
    e.preventDefault();
    let value = password.value;
    let regexPassword= /^[a-zA-Z0-9]{12,25}$/g;
    if(regexPassword.test(value)){
        console.log("Contraseña válida");
    }else{
        console.log("Contraseña inválida. Debe contener al menos 12 caracteres, una letra en mayúscula y un número.");
    }

})