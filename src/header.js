const burgerOpen = document.querySelector(".burger-open")
const burgerClose = document.querySelector(".burger-close")
const mobMenu = document.querySelector(".header-mob-burger")

function burgerOn() {
    mobMenu.classList.add("is-open")
}

function burgerOf() {
    mobMenu.classList.remove("is-open")
}

burgerOpen.addEventListener('click', burgerOn)
burgerClose.addEventListener('click', burgerOf)