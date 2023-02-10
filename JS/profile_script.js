const ageInput = document.getElementById('ageInput')
const dobInput = document.getElementById('dobInput')
const contactInput = document.getElementById('contactInput')

const ageError = document.getElementById('ageError')
const dobError = document.getElementById('dobError')
const contactError = document.getElementById('contactError')

const dobPattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

function updateProfileButtonClick() {
    // console.log('updateProfileButtonClick function clicked')
    if (ageInput.value == '') {
        ageInput.style = 'border-color:red'
        ageError.innerText = '*Please enter age'
    }
    else {
        if (isNaN(ageInput.value)) {
            ageInput.style = 'border-color:red'
            ageError.innerText = '*Please use only numbers'
        }
        else if (ageInput.value < 1 || ageInput.value.length < 1 || ageInput.value.length > 2) {
            ageInput.style = 'border-color:red'
            ageError.innerText = '*Please enter a valid age'
        }
        else {
            ageInput.removeAttribute('style')
            ageError.innerText = ''
        }
    }
    if (dobInput.value == '') {
        dobInput.style = 'border-color:red'
        dobError.innerText = '*Please enter date of birth'
    }
    else {
        if (dobInput.value.match(dobPattern)) {
            dobInput.removeAttribute('style')
            dobError.innerText = ''
        }
        else {
            dobInput.style = 'border-color:red'
            dobError.innerText = '*Please enter date of birth in DD-MM-YYYY format'
        }
    }
    if (contactInput.value == '') {
        contactInput.style = 'border-color:red'
        contactError.innerText = '*Please enter contact'
    }
    else {
        if (isNaN(contactInput.value)) {
            contactInput.style = 'border-color:red'
            contactError.innerText = '*Please use numbers only'
        }
        else if (contactInput.value < 0) {
            contactInput.style = 'border-color:red'
            contactError.innerText = '*Please enter a valid contact'
        }
        else if (contactInput.value.length < 10 || contactInput.value.length > 10) {
            contactInput.style = 'border-color:red'
            contactError.innerText = '*Contact number should be of 10 digits only'
        }
        else {
            contactInput.removeAttribute('style')
            contactError.innerText = ''
        }
    }
    if (ageError.innerText == '' && dobError.innerText == '' && contactError.innerText == '') {
        alert('Profile Updated Successfully')
        ageInput.value = ''
        dobInput.value = ''
        contactInput.value = ''
    }

}

function ageInputValidate() {
    // console.log('ageInputValidate function invoked')
    if (ageInput.value == '') {
        ageInput.style = 'border-color:red'
        ageError.innerText = '*Please enter age'
    }
    else if (isNaN(ageInput.value)) {
        ageInput.style = 'border-color:red'
        ageError.innerText = '*Please use only numbers'
    }
    else if (ageInput.value < 1 || ageInput.value.length < 1 || ageInput.value.length > 2) {
        ageInput.style = 'border-color:red'
        ageError.innerText = '*Please enter a valid age'
    }
    else {
        ageInput.removeAttribute('style')
        ageError.innerText = ''
    }
}

function dobInputValidate() {
    // console.log('dobInputValidate function invoked')
    if (dobInput.value == '') {
        dobInput.style = 'border-color:red'
        dobError.innerText = '*Please enter date of birth'
    }
    else if (dobInput.value.match(dobPattern)) {
        dobInput.removeAttribute('style')
        dobError.innerText = ''
    }
    else {
        dobInput.style = 'border-color:red'
        dobError.innerText = '*Please enter date of birth in DD-MM-YYYY format'
    }
}

function contactInputValidate() {
    // console.log('contactInputValidate function invoked')
    if (contactInput.value == '') {
        contactInput.style = 'border-color:red'
        contactError.innerText = '*Please enter contact'
    }
    else if (isNaN(contactInput.value)) {
        contactInput.style = 'border-color:red'
        contactError.innerText = '*Please use numbers only'
    }
    else if (contactInput.value < 0) {
        contactInput.style = 'border-color:red'
        contactError.innerText = '*Please enter a valid contact'
    }
    else if (contactInput.value.length < 10 || contactInput.value.length > 10) {
        contactInput.style = 'border-color:red'
        contactError.innerText = '*Contact number should be of 10 digits only'
    }
    else {
        contactInput.removeAttribute('style')
        contactError.innerText = ''
    }
}