const passwordField = document.querySelector("#Password")
const button = document.querySelector(".generateBtn")
const copyIcon = document.querySelector(".copyIcon")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialSymbol = "@#$%&*<>?!~^_:;"

const length = 8
button.addEventListener("click", ()=> {
    let password = ''
    while (password.length <= length) {
    password += upperCase[Math.floor( Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)]
    }
    passwordField.value = password;
})

copyIcon.addEventListener("click", ()=> {
    navigator.clipboard.writeText(passwordField.value)
    .then(()=> {
        alert("Password copied to clipboard");
    })
    .catch(()=> {
        alert("Failed to copy: " + err);
    })
})
