const botao = document.getElementById('button-random-color')
botao.addEventListener('click', alteraCores);
function alteraCores () {
    for (let index = 2; index <= 4; index +=1) {
        let r = parseInt(Math.random()*255)
        let g = parseInt(Math.random()*255)
        let b = parseInt(Math.random()*254) //é 254 para eliminar a possibilidade de dar branco
        const cores = document.getElementById('cor' + index)
        cores.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
    }
    if ('cor2' === 'cor3' || 'cor2' === 'cor4' || 'cor3' === 'cor4') {
        for (let index = 2; index <= 4; index +=1) {
            let r = parseInt(Math.random()*255)
            let g = parseInt(Math.random()*255)
            let b = parseInt(Math.random()*254)
            const cores = document.getElementById('cor' + index)
            cores.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
        }
    }
    let corInicial = [cor2.style.backgroundColor, cor3.style.backgroundColor, cor4.style.backgroundColor];
    
    localStorage.setItem('colorPalette',JSON.stringify(corInicial));
}

for (let index = 1; index <= 25; index += 1) {
    const quadrados = document.getElementById("pixel-board");
    let div = document.createElement('div');
    div.classList.add('pixel')
    quadrados.appendChild(div);
}

const botaoLimpar = document.getElementById('clear-board')
botaoLimpar.addEventListener('click', reset)
function reset () {
    const pixels = document.getElementsByClassName('pixel')
    for (let index = 0; index < pixels.length; index +=1) {
    pixels[index].style.backgroundColor = 'white'
    }
}

window.onload = function() {
    let coresIniciais = JSON.parse(localStorage.getItem('colorPalette'));
    console.log(coresIniciais)
    if (coresIniciais === null) {
        document.getElementById('cor2').style.backgroundColor = 'RGB(255, 0, 0)';
        document.getElementById('cor3').style.backgroundColor  = 'RGB(0, 255, 0)';
        document.getElementById('cor4').style.backgroundColor  = 'RGB(0, 0, 255)';
    } else {
        document.getElementById('cor2').style.backgroundColor = coresIniciais[0];
        document.getElementById('cor3').style.backgroundColor = coresIniciais[1];
        document.getElementById('cor4').style.backgroundColor = coresIniciais[2];
    }
}