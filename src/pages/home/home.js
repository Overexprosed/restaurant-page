import "./home.css"

export const buildHomePage = () => {
    const home = document.createElement("div")
    home.classList.add("home")

    const homeLogo = document.createElement("div")
    homeLogo.textContent = "Krusty Krab"
    homeLogo.classList.add("home-logo")
    home.appendChild(homeLogo)

    return home
}
