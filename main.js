const header = document.getElementById('header')
const title = document.getElementById('title')
const fNameInput = document.getElementById('fNameInput')
const lNameInput = document.getElementById('lNameInput')
const ageInput = document.getElementById('ageInput')
const userNameInput = document.getElementById('usernameInput')
const passwordInput = document.getElementById('passwordInput')
const signInBtn = document.getElementById('signInBtn')
const resetBtn = document.getElementById('resetBtn')
const mainContainer = document.getElementById('mainContainer')
// const user = {
//     fName : 'khadeeja' ,
//     lName : 'sameer',
//     dob : '1/1/2001'


// }
// header.innerHTML = `
// <h1>welcome Mrs.${user.fName} ${user.lName}</h1>
// <h2>your birth date in our databases is ${user.dob} </h2>
// `
// const rendUser = function (fName,lName) {
//     header.innerHTML =`
//     <h1>welcome Mrs.${fName} ${lName}</h1>
//     `
// }

const renderUser = function () {
    mainContainer.innerHTML = ''
        `<h1>welcome Mrs.${fName} ${lName}</h1>`
    const firstName = document.createElement('h2')
    firstName.innerText = `first name: ${user.firstName}`
    const lastName = document.createElement('h2')
    lastName.innerText = `last name: ${user.lastName}`
    mainContainer.append(firstName, lastName)
}
register(fName, lastName, userName, password, age)
 {
const user = new User(fName, lastName, userName, password, age)
 }
const submit = function (user) {
    const userName = userNameInput.value
    const password = passwordInput.value
    const fName = fNameInput.value
    const lName = lNameInput.value
    const age = ageInput.value
    user.register(userName, password, fName, lName, age)

    return renderUser
}
const startOver = function () {
    userNameInput.value = ''
    passwordInput.value = ''
    fNameInput.value = ''
    lNameInput.value = ''
    ageInput.value = ''
}

signInBtn.addEventListener('click', submit)
resetBtn.addEventListener('click', startOver)