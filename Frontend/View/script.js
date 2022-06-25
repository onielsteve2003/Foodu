const form = document.getElementById('reservation-form')
const firstname = document.getElementById('firstName')
const lastname = document.getElementById('lastName')
const date = document.getElementById('date')
const time = document.getElementById('time')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phoneNum')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        date: date.value,
        time: time.value,
        email: email.value,
        phoneNum: phoneNum.value,
    }

    axios.post('http://localhost:5000/api/reservations', userData)
    .then(res => {
        document.getElementById('error-body').innerHTML = `<div style="background-color: green; color: #fff">${res.data.msg}</div>`
        setTimeout(() => {
            document.getElementById('error-body').innerHTML = ''
        }, 3000);
        // Clear form
        firstname.value = ''
        lastname.value = ''
        date.value = ''
        time.value = ''
        email.value = ''
        phoneNum.value = ''
    })
    .catch(err => {
        document.getElementById('error-body').style.display = 'block'
        document.getElementById('error-body').innerHTML = `<div style="background-color: pink;"> ${err.response.data.error} </div>`
        setTimeout(() => {
            document.getElementById('error-body').innerHTML = ''
        }, 3000);
    })
})