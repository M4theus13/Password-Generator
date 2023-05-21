let slider = document.querySelector('#slider')
let button = document.querySelector('#button') 
let sizePassword = document.querySelector('#value')
let password = document.querySelector('#password')
let containerPassword = document.querySelector('#container-password')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$'
let newPassword = ''

sizePassword.innerHTML = slider.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    let pass = ''
    for(let i = 0, n = charset.length; i < slider.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove('hide') //remove a classe do elemento
    password.innerHTML = pass
    newPassword = pass
}

function copyPassword(){
    alert('Senha copiada com sucesso!')
    navigator.clipboard.writeText(newPassword) // copia oque esta na variavel
}
