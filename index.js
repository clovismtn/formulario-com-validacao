const campos = document.getElementById('campos');

const inputs = document.querySelectorAll('.inputs');

const spanRequired = document.querySelectorAll('.span-required');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const telRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

function setError(index){
    inputs[index].style.border = '2px solid red'
    spanRequired[index].style.display = 'block'
}

function setcheck(index){
        inputs[index].style.border = '2px solid #00C22B'
        spanRequired[index].style.display = 'none'
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0)
    }

    else {

        setcheck(0)

    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) {

        setcheck(1)
    }

    else {

        setError(1)

    }
}

function telValidate() {
    if (telRegex.test(campos[2].value)) {

        setcheck(2)
    }

    else {

        setError(2)

    }
}

function textValidate() {
    if (campos[3].value.length < 3) {

        setError(3)
    }

    else {

        setcheck(3)

    }
}