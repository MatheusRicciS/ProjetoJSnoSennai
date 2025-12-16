const btnChuC = document.querySelector('#btn1')
const btnPot = document.querySelector('#btn2')
const btnMC = document.querySelector('#btn3')
const btnCub = document.querySelector('#btn4')
const btnAn = document.querySelector('#btn5')
const btnanim = document.querySelector('#btn6')

let url = ['file:///F:/Pendrive/JSsennaiProjeto/coresChuva.html',
    'file:///F:/Pendrive/JSsennaiProjeto/Podion.html',
    'file:///F:/Pendrive/JSsennaiProjeto/MouseC.html',
    'file:///F:/Pendrive/JSsennaiProjeto/Cubo.html'
]

function IrChuva(url){
    const win = window.open(url[0], '_blank')
    win.focus()
}

btnChuC.addEventListener('click', () => {
    IrChuva(url)
})


function IrPocao(url){
    const win = window.open(url[1], '_blank')
    win.focus()
}

btnPot.addEventListener('click', () => {
    IrPocao(url)
})


function IrMouse(url){
    const win = window.open(url[2], '_blank')
    win.focus()
}

btnMC.addEventListener('click', () => {
    IrMouse(url)
})


function IrCuB(url){
    const win = window.open(url[3], '_blank')
    win.focus()
}

btnCub.addEventListener('click', () => {
    IrCuB(url)
})