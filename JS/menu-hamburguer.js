function initMenuHamburguer(){
const btnMobile = document.getElementById('btn-mobile');
const ul = document.getElementById('menu')
const nav = document.getElementById('nav');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  
  nav.classList.toggle('ativo');
  const ativo = nav.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativo);
  if (ativo) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}


btnMobile.addEventListener('click', toggleMenu);
function clickMobile (event){
  const tagName = event.target.tagName.toLowerCase()
  if(tagName === 'a' || tagName === 'ul' || tagName === 'li'){
    nav.classList.remove('ativo');
  }

}
ul.addEventListener('click', clickMobile);
btnMobile.addEventListener('touchstart', toggleMenu);
}    
initMenuHamburguer()