const usernameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')

function loginButtonClick() {
    if (usernameInput.value == "") {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please enter username'
    }
    else {
        usernameInput.removeAttribute('style')
        usernameError.innerText = ''
    }
    if (passwordInput.value == "") {
        passwordInput.style = 'border-color:red'
        passwordError.innerText = '*Please enter password'
    }
    else {
        passwordInput.removeAttribute('style')
        passwordError.innerText = ''
    }
    if (usernameError.innerText == '' && passwordError.innerText == '') {
        alert('Login Successful !')
        usernameInput.value = ''
        passwordInput.value = ''
        window.open('./../HTML/profile_index.html')
    }
}

function usernameValidate() {
    if (usernameInput.value == '') {
        usernameInput.style = 'border-color:red'
        usernameError.innerText = '*Please enter username'
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
    else {
        passwordInput.removeAttribute('style')
        passwordError.innerText = ''
    }
}