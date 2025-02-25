import "./style.css"
import {buildHomePage} from "./pages/home/home";
import {buildMenuPage} from "./pages/menu/menu";

const pageContent = document.querySelector(".page-content")
const homeBtn = document.querySelector(".home-btn")
const menuBtn = document.querySelector(".menu-btn")

homeBtn.addEventListener("click", () => {
    removeNextChild(pageContent)
    pageContent.appendChild(buildHomePage())
})

menuBtn.addEventListener("click", () => {
    removeNextChild(pageContent)
    pageContent.appendChild(buildMenuPage())
})

removeNextChild(pageContent)
pageContent.appendChild(buildHomePage())

function removeNextChild(element) {
    const firstChild = element.querySelector("*")
    if (firstChild) firstChild.remove()
}
