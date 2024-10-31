let jouevent = document.getElementById("bouton-jouer")
let optionevent = document.getElementById("bouton-option")
let quittevent = document.getElementById("bouton-quitter")

let menu = document.getElementById("menu-container")
let clownRandomize = document.getElementById("clown-rand")


function lancerlejeu() {
    jouevent.addEventListener ("click",function(){
    console.log("debut de patie");
    menu.classList.add("hidden");
    clownRandomize.classList.remove("hidden");
    
})
}
lancerlejeu()