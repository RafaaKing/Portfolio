function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length){
        function scrollSuave(){
            sections.forEach((item) => {
                const windowTop = item.getBoundingClientRect().top
                const windowMetade = window.innerHeight * 0.65

                if(windowTop < windowMetade){
                    item.classList.add('ativo')
                } 
            })
        }
        scrollSuave()
        window.addEventListener('scroll', scrollSuave)
    }
}
initAnimacaoScroll()