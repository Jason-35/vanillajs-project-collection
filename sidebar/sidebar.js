const toggle = document.getElementsByClassName("hamburger")[0]
const menu = document.getElementsByClassName("mobile-menu")[0]
const nav = document.getElementsByTagName("nav")[0]
let show = false

window.addEventListener("resize", (e) => {
    if(e.target.innerWidth > 800){
        menu.style.height = "0rem";
    }
})

toggle.addEventListener("click", () => {
    show = !show
    console.log("show")
    if(show){
        // show the menu
        menu.style.height = "14rem";
    }else{
        menu.style.height = "0rem";
    }
})