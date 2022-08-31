const paletaCores = document.getElementById('color-palette');
function coresPaleta() {
    for(index = 0; index < 4; index +=1) {
        const slots = document.createElement('div');
        paletaCores.appendChild(slots)
    }
}