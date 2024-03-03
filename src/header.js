const burgerOpen = document.querySelector(".burger-open")
const burgerClose = document.querySelector(".burger-close")
const mobMenu = document.querySelector(".header-mob-burger")
const linkBtnOne = document.querySelector(".link-one")
const linkBtnTwo = document.querySelector(".link-two")
const linkBtnThree = document.querySelector(".link-three")
const linkBtnFor = document.querySelector(".link-for")

function burgerOn() {
    mobMenu.classList.add("is-open")
}

function burgerOf() {
    mobMenu.classList.remove("is-open")
}

burgerOpen.addEventListener('click', burgerOn)
burgerClose.addEventListener('click', burgerOf)
linkBtnOne.addEventListener('click', burgerOf)
linkBtnTwo.addEventListener('click', burgerOf)
linkBtnThree.addEventListener('click', burgerOf)
linkBtnFor.addEventListener('click', burgerOf)
