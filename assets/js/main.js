window.addEventListener("load", () => {
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let sideBar = document.querySelector(".sidebar");
    let brandName = document.querySelector(".brand-name");
    let main = document.querySelector("main");
    
    /* hamburger-menu */
    hamburgerMenu.addEventListener("click", () => {

        if (hamburgerMenu.classList.contains("open")) {
            sideBar.classList.remove("open")
            hamburgerMenu.classList.remove("open");
            main.classList.remove("exp");
            brandName.classList.add("d-flex")
            brandName.classList.remove("d-none")
        } else {
            hamburgerMenu.classList.add("open");
            sideBar.classList.add("open")
            main.classList.add("exp");
            brandName.classList.add("d-none")
            brandName.classList.remove("d-flex")
        }
    })

})