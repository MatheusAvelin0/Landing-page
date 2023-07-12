const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio

    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }
 // verificar se o email é valido
   if(emailInput.value === "" || !isEmailValid(emailInput.value)){
    alert("Por favor, preencha seu email")
    return;
   }
// verificar se a senha esta preenchida  

if(!validatePassword(passwordInput.value, 8)) {
    alert("A senha precisa ser no minimo 8 digitos")
    return;
}
// verificar se a situação de trabalho foi selecionada
if(jobSelect.value === ""){
    alert("Por favor, selecione uma opção")
    return;
}

// verifica se a mensagem esta preenchida

if(messageTextarea.value === "") {
    alert("Por favor, escreva uma mensagem")
    return;
}


 //se todos os campos estiverem preenchidos, envie o submit
    form.submit();
});

// função que valida email

function isEmailValid(email){

// cria uma regex para validar email

const emailRegex = new RegExp(
    
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
);

if (emailRegex.test(email)){
    return true;
}
return false;
}


// função que valida a senha

function validatePassword(password, minDigits) {
    if(password.length >= minDigits) {
         //senha valida
        return true;
    }
    // senha invalida
    return false;
}
