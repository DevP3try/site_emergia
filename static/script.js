

// Botao de menu lateral
function menuIco(x) {
    x.classList.toggle("change");  
    let sideWidth = document.getElementById("sideNav").style.width   
    openNav()     
    
    if (sideWidth == "250px") {
        closeNav()
        
    }
}

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    
    
}

function closeNav() {
        document.getElementById("sideNav").style.width = "0px";
}
