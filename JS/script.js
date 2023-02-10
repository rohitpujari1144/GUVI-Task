const nameInput = document.getElementById('nameInput')
const emailInput = document.getElementById('emailInput')
const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const cPasswordInput = document.getElementById('cPasswordInput')

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')
const cPasswordError = document.getElementById('cPasswordError')

const emailPattern = /^[^]+@[^]+\.[A-zZ]{2,3}$/

function registerButtonClick() {
    // console.log('registerButtonClick function invoked')
    if (nameInput.value == '') {
        nameInput.style = 'border-color:red'
        nameError.innerText = '*Please enter name'
    }
    else {
        if (!isNaN(nameInput.value)) {
            nameInput.style = 'border-color:red'
            nameError.innerText = '*Please use characters only'
        }
        else if (nameInput.value.length < 3) {
            nameInput.style = 'border-color:red'
            nameError.innerText = '*Please enter a valid name'
        }
        else {
            nameInput.removeAttribute('style')
            nameError.innerText = ''
        }
    }
    if (emailInput.value == '') {
        emailInput.style = 'border-color:red'
        emailError.innerText = '*Please enter email id'
    }
    else {
        if (emailInput.value.match(emailPattern)) {
            emailInput.removeAttribute('style')
            emailError.innerText = ''
        }
        else {
            emailInput.style = 'border-color:red'
            emailError.innerText = '*Please enter a valid email id'
        }
    }
    if (usernameInput.value == '') {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please enter username'
    }
    else {
        if (!isNaN(usernameInput.value)) {
            usernameInput.style = 'border-color:red'
            usernameError.innerText = '*Please use only characters'
        }
        else if (usernameInput.value.length < 3) {
            usernameInput.style = 'border-color:red'
            usernameError.innerText = '*Please enter a valid username'
        }
        else {
            usernameInput.removeAttribute('style')
            usernameError.innerText = ''
        }
    }
    if (passwordInput.value == '') {
        passwordInput.style = 'border-color:red'
        passwordError.innerText = '*Please enter password'
    }
    else {
        if (!isNaN(passwordInput.value)) {
            passwordInput.style = 'border-color:red'
            passwordError.innerText = '*Please use only characters'
        }
        else if (passwordInput.value.length < 5 || passwordInput.value.length > 15) {
            passwordInput.style = 'border-color:red'
            passwordError.innerText = '*Password length should be between 5 to 15'
        }
        else {
            passwordInput.removeAttribute('style')
            passwordError.innerText = ''
        }
    }
    if (cPasswordInput.value == '') {
        cPasswordInput.style = 'border-color:red'
        cPasswordError.innerText = '*Please enter password again'
    }
    else {
        if (cPasswordInput.value.match(passwordInput.value) && passwordInput.value.match(cPasswordInput.value)) {
            cPasswordInput.removeAttribute('style')
            cPasswordError.innerText = ''
        }
        else {
            cPasswordInput.style = 'border-color:red'
            cPasswordError.innerText = '*Password is not matching'
        }
    }
    if (nameError.innerText == '' && emailError.innerText == '' && usernameError.innerText == '' && passwordError.innerText == '' && cPasswordError.innerText == '') {
        // console.log('Registration successful')
        alert('Registration Successful !')
        nameInput.value = ''
        emailInput.value = ''
        usernameInput.value = ''
        passwordInput.value = ''
        cPasswordInput.value = ''
        window.open('./../HTML/login_index.html')
    }
}

function nameValidate() {
    // console.log('nameValidate function invoked')
    if (nameInput.value == '') {
        nameInput.style = 'border-color:red'
        nameError.innerText = '*Please enter name'
    }
    else if (!isNaN(nameInput.value)) {
        nameInput.style = 'border-color:red'
        nameError.innerText = '*Please use characters only'
    }
    else if (nameInput.value.length < 3) {
        nameInput.style = 'border-color:red'
        nameError.innerText = '*Please enter a valid name'
    }
    else {
        nameInput.removeAttribute('style')
        nameError.innerText = ''
    }
}

function emailValidate() {
    if (emailInput.value == '') {
        emailInput.style = 'border-color:red'
        emailError.innerText = '*Please enter email id'
    }
    else if (emailInput.value.match(emailPattern)) {
        emailInput.removeAttribute('style')
        emailError.innerText = ''
    }
    else {
        emailInput.style = 'border-color:red'
        emailError.innerText = '*Please enter a valid email id'
    }
}

function usernameValidate() {
    if (usernameInput.value == '') {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please enter username'
    }
    else if (!isNaN(usernameInput.value)) {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please use only characters'
    }
    else if (usernameInput.value.length < 3) {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please enter a valid username'
    }
    else {
        usernameInput.removeAttribute('style')
        usernameError.innerText = ''
    }
}

function passwordValidate() {
    if (passwordInput.value == '') {
        passwordInput.style = 'border-color:red'
        passwordError.innerText = '*Please enter password'
    }
    else if (!isNaN(passwordInput.value)) {
        passwordInput.style = 'border-color:red'
        passwordError.innerText = '*Please use only characters'
    }
    else if (passwordInput.value.length < 5 || passwordInput.value.length > 15) {
        passwordInput.style = 'border-color:red'
        passwordError.innerText = '*Password length should be between 5 to 15'
    }
    else {
        passwordInput.removeAttribute('style')
        passwordError.innerText = ''
    }
}

function cPasswordValidate() {
    if (cPasswordInput.value == '') {
        cPasswordInput.style = 'border-color:red'
        cPasswordError.innerText = '*Please enter password again'
    }
    else if (cPasswordInput.value.match(passwordInput.value) && passwordInput.value.match(cPasswordInput.value)) {
        cPasswordInput.removeAttribute('style')
        cPasswordError.innerText = ''
    }
    else {
        cPasswordInput.style = 'border-color:red'
        cPasswordError.innerText = '*Password is not matching'
    }
}

