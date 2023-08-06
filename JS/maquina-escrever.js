function initMaquinaEscrever(){
    function typeWriter(elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        setTimeout(() => {
        for(let i = 0; i < textoArray.length; i++) {
            setTimeout(() => elemento.innerHTML += textoArray[i], 170 * i);
        }}, 1500);
        setTimeout(() => typeWriter(titulo),14000);
    }
    const titulo = document.querySelector('.nome');
    typeWriter(titulo);
}
initMaquinaEscrever()
