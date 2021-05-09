

const inputEmail= document.querySelector('.input');
const button = document.querySelector(".select");
const main = document.querySelector(".message");
const label = document.querySelector(".myLabel");
const alertIcon = document.createElement("div");
const alertMessage = document.createElement("div");
alertIcon.className = 'errorIcon';
alertMessage.className = 'errorMessage'
button.addEventListener('click',()=> {

    const emailRegex = (/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.(com|es|gov)(.co)?/gmi);
    if(inputEmail.value === "" || emailRegex.test(inputEmail.value) === false){
        alertIcon.innerHTML = `
            <img src="assets/images/icon-error.svg">
        `
        alertMessage.innerHTML = '<p> Please provide a valid email </p>'
        label.appendChild(alertIcon);
        main.appendChild(alertMessage);
    }
});




