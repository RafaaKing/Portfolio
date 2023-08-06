function initHabilidadesTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu i')
    const tabDesc = document.querySelectorAll('.descricao')
    const tabContent = document.querySelectorAll('.js-menudesc article')

    if(tabMenu.length && tabContent.length){
        let msg = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */' 
        if (window.innerWidth <= 800){
            msg = '/* Clique em alguma habilidade para ler a descrição */'
        } 

        tabDesc[0].innerHTML = msg

        function activeTab(index) {
            tabContent.forEach(item => {
                item.classList.remove('ativo')
            });

            tabContent[index].classList.add('ativo')    
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseover', function(){
                activeTab(index)
                tabDesc[0].innerHTML = ''         
            }) 
        })

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('mouseout', function(){
                activeRemove(index)
                tabDesc[0].innerHTML = msg 
            })
        })

        function activeRemove() {
            tabContent.forEach(item => {
                item.classList.remove('ativo')
            });    
        }
    }
}    
initHabilidadesTab()