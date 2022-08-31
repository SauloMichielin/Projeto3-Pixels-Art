
const botao = document.getElementById('button-random-color')
botao.addEventListener('click', alteraCores);
function alteraCores () {
    for (let index = 2; index <= 4; index +=1) {
        let r = parseInt(Math.random()*255)
        let g = parseInt(Math.random()*255)
        let b = parseInt(Math.random()*254) //é 254 para eliminar a possibilidade de dar branco
        const cores = document.getElementById('cor'+index)
        cores.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
    }
    if ('cor1' === 'cor2' || 'cor1' === 'cor3' || 'cor2' === 'cor3') {
        for (let index = 2; index <= 4; index +=1) {
            let r = parseInt(Math.random()*255)
            let g = parseInt(Math.random()*255)
            let b = parseInt(Math.random()*254) //é 254 para eliminar a possibilidade de dar branco
            const cores = document.getElementById('cor'+index)
            cores.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
        }
    }
}