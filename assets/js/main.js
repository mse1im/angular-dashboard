window.addEventListener("load", () => {
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let sideBar = document.querySelector(".sidebar");
    let brandName = document.querySelector(".logo");
    let main = document.querySelector(".main");
    let navElement = document.querySelector("nav").children[0].children;
    let subMenu = document.querySelector(".submenu");
    
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

    /* open-menu */
    for (let i = 0; i < navElement.length; i++) {
        navElement[i].addEventListener("click", () => {
            if (navElement[i].children[1] != undefined) {
                if (!navElement[i].children[1].classList.contains("d-block")) {
                    subMenu.classList.add("d-block");
                    navElement[i].classList.add("active");
                    navElement[i].classList.add("open")
                }else {
                    subMenu.classList.remove("d-block");
                    navElement[i].classList.remove("active");
                    navElement[i].classList.remove("open")
                }
            }
        })
    }

    function mobileResize () {
        if (this.innerWidth <= 768) {
            hamburgerMenu.classList.add("open");
            sideBar.classList.add("open")
            main.classList.add("exp");
            brandName.classList.add("d-none")
            brandName.classList.remove("d-flex")
        }else {
            sideBar.classList.remove("open")
            hamburgerMenu.classList.remove("open");
            main.classList.remove("exp");
            brandName.classList.add("d-flex")
            brandName.classList.remove("d-none")
        }
    }
    mobileResize();

    this.addEventListener("resize", mobileResize)
})