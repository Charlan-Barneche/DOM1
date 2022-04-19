let a = window.document.getElementById('btn1')
let b = window.document.getElementById('btn2')
let c = window.document.querySelector('body')

// listener elemento a
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

// listener elemento b

b.addEventListener('click', clicar2)
b.addEventListener('mouseenter', entrar2)
b.addEventListener('mouseout', sair2)


function clicar() {
    a.style.background = 'red'
    c.style.backgroundColor = 'black'

}

function entrar() {
    a.innerText = 'Preto'
    a.style.background = 'green'

}

function sair() {
    a.innerText = 'Preto'
    a.style.background = 'blue'

}


function clicar2() {
    b.style.background = 'red'
    c.style.backgroundColor = 'white'

}

function entrar2() {
    b.innerText = 'Branco'
    b.style.background = 'green'

}

function sair2() {
    b.innerText = 'Branco'
    b.style.background = 'blue'

}
