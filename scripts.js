const itens = {
    //toggle button
    toggleButton : document.querySelector('#toggle-button'),
    ball : document.querySelector('#toggle-ball'),
    check : document.querySelector('#check-toggle'),

    // menu
    menuCheck : document.querySelector('#check-menu'),
    menu : document.querySelector('#menu-button'),
    menuBody : document.querySelector('#menu-body')
}
itens.toggleButton.addEventListener('click', () => {
    if (itens.check.checked){
        itens.ball.style.marginLeft = "50px"
        itens.ball.style.transition = "0.3s"
        setTimeout(()=> {
            document.body.style.transition = "0.3s"
            document.body.style.background = "#05001a"
        }, 300)
        
    } else {
        itens.ball.style.marginLeft = "0px"
        itens.ball.style.transition = "0.3s"
        setTimeout(()=> {
            document.body.style.transition = "0.3s"
            document.body.style.background = "#ffffff"
        }, 300)
    }

})
itens.menu.addEventListener('click', () => {
    if (itens.menuCheck.checked){
        itens.menuBody.style.transition = "0.3s"
        itens.menuBody.style.visibility = "visible"
        itens.menuBody.style.marginLeft = "5px"
    } else {
        itens.menuBody.style.transition = "0.3s"
        itens.menuBody.style.marginLeft = "-205px"
        itens.menuBody.style.visibility = "hidden"
    }
})