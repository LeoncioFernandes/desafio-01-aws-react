function redirecionarUrl(url, delay = 0, newTab = false){
    setTimeout(() => {
        if (newTab) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    }, delay);
}

const userCadForm = document.getElementById("userCadForm");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");

userName.addEventListener('blur', () => {
    validarElemento(userName, "Name required");
})
userEmail.addEventListener('blur', () => {
    validarElemento(userEmail, "E-mail required");
})
userPassword.addEventListener('blur', () => {
    validarElemento(userPassword, "Password required");
})
userConfirmPassword.addEventListener('blur', () => {
    validarElemento(userConfirmPassword, "Confirm password required");
})

userCadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!validarElemento(userName, "Name required")){
        userName.focus();
    }else if(!validarElemento(userEmail, "E-mail required")){
        userEmail.focus();
    }else if(!validarElemento(userPassword, "Password required")){
        userPassword.focus();
    }else if(!validarElemento(userConfirmPassword, "Confirm password required")){
        userConfirmPassword.focus();
    }
    else{
        saveFormData(userName.value, userEmail.value, userPassword.value);
        redirecionarUrl("user-info.html");
    }   
})

function addSpan(element, span, parent, text){
    element.style.borderColor = "red";
    element.style.outlineColor = "red";
    element.style.borderWidth = "2px";
    span.innerHTML = text;
    if(!parent.querySelector('span')){
        element.insertAdjacentElement("afterend", span);
    }else{
        parent.removeChild(parent.querySelector("span"));
        element.insertAdjacentElement("afterend", span);
    }
}

function removeSpan(element, parent){
    element.style.borderColor = "#000000";
    element.style.outlineColor = "#000000";
    element.style.borderWidth = "1px";
    if(parent.querySelector('span')){
        parent.removeChild(parent.querySelector("span"));
    }
}

function validarElemento(element, text = "Required"){

    const span = document.createElement("span");
    const parent = element.parentElement;
    const elPassword = document.getElementById("password");
    const password = elPassword.value;
    const elConfirmPassword = document.getElementById("confirmPassword");
    const passwordConfirm = elConfirmPassword.value

    if(element.value == ""){
        addSpan(element, span, parent, text);
        return false;
    }else if(element.id == "name" && element.value.length <= 3){
        addSpan(element, span, parent, "Name must have more than 3 characters");
        return false;
    }else if(element.id == "email" && !/\w+@\w+\.\w+/.test(element.value)){
        addSpan(element, span, parent, "Invalid e-mail");
        return false;
    }else if(element.id == "password" && element.value != passwordConfirm){
        addSpan(element, span, parent, "Different passwords");
        return false;
    }else if(element.id == "confirmPassword" && element.value != password){
        addSpan(element, span, parent, "Different passwords");
        return false;
    }
    else{
        removeSpan(element, parent)
        
        removeSpan(elConfirmPassword, elConfirmPassword.parentElement);
        removeSpan(elPassword, elPassword.parentElement);
        
        return true;
    }
}

function saveFormData(nameUser, emailUser, passwordUser){
    localStorage.setItem("formData", JSON.stringify({nameUser, emailUser, passwordUser}));
}

function loadFormData(){
    const savedData = JSON.parse(localStorage.getItem('formData'));

    if(savedData){
        const userName = document.getElementById("userName");
        const userEmail = document.getElementById("userEmail");

        userName.innerHTML = savedData.nameUser;
        userEmail.innerHTML = savedData.emailUser

        localStorage.removeItem("formData");
    }else{
        redirecionarUrl("get-start.html");
    }
}