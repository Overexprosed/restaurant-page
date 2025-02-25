import "./menu.css"

export const buildMenuPage = () => {
    const menuMain = document.createElement("div")
    menuMain.classList.add("menu-main")

    const menuTitle = document.createElement("div")
    menuTitle.classList.add("menu-title")
    menuTitle.textContent = "Galley Grub"
    menuMain.appendChild(menuTitle)

    const menu = document.createElement("div")
    menu.classList.add("menu")
    menuMain.appendChild(menu)

    menu.appendChild(buildSection1())
    menu.appendChild(buildSection2())
    menu.appendChild(buildSection3())
    menu.appendChild(buildSection4())
    menu.appendChild(buildSection5())

    return menuMain
}

function buildSection1() {
    const menuSection = new MenuSection()

    menuSection.addMenuItem("Krabby Patty", "1.25")
    menuSection.addMenuItem("w/ sea cheese", "1.50", true)
    menuSection.addMenuItem("Double Krabby Patty", "2.00")
    menuSection.addMenuItem("w/ sea cheese", "2.25", true)
    menuSection.addMenuItem("Triple Krabby Patty", "3.00")
    menuSection.addMenuItem("w/ sea cheese", "3.25", true)

    return menuSection.build()
}

function buildSection2() {
    const menuSection = new MenuSection()

    menuSection.addMenuItem("Krabby Meal", "3.50")
    menuSection.addMenuItem("Double Krabby Meal", "3.75")
    menuSection.addMenuItem("Triple Krabby Meal", "4.00")
    menuSection.addMenuItem("Salty Sea Dog", "1.25")
    menuSection.addMenuItem("Footlong", "2.00")
    menuSection.addMenuItem("Sailors Surprise", "3.00")
    menuSection.addMenuItem("Golden Loaf", "2.00")
    menuSection.addMenuItem("w/ sauce", "2.50", true)

    return menuSection.build()
}

function buildSection3() {
    const menuSection = new MenuSection()

    menuSection.addMenuItem("Coral bits")
    menuSection.addMenuItem("Small", "1.00", true)
    menuSection.addMenuItem("Medium", "1.25", true)
    menuSection.addMenuItem("Large", "1.75", true)

    return menuSection.build()
}

function buildSection4() {
    const menuSection = new MenuSection()

    menuSection.addMenuItem("Kelp Shake", "2.00")
    menuSection.addMenuItem("Seafoam Soda")
    menuSection.addMenuItem("Small", "1.00", true)
    menuSection.addMenuItem("Medium", "1.25", true)
    menuSection.addMenuItem("Large", "1.50", true)

    return menuSection.build()
}

function buildSection5() {
    const menuSection = new MenuSection()

    menuSection.addMenuItem("Kelp Rings", "1.50")
    menuSection.addMenuItem("salty sauce", "0.50", true)

    return menuSection.build()
}

class MenuSection {

    constructor() {
        this.items = []

        this.menuSection = document.createElement("div")
        this.menuSection.classList.add("menu-section")
    }

    addMenuItem(title, price, additional) {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")
        if (additional) menuItem.classList.add("menu-item-additional")

        const menuItemTitle = document.createElement("div")
        menuItemTitle.classList.add("menu-item-title")
        menuItemTitle.textContent = title
        menuItem.appendChild(menuItemTitle)

        const menuItemPrice = document.createElement("div")
        menuItemPrice.classList.add("menu-item-price")
        menuItemPrice.textContent = price
        menuItem.appendChild(menuItemPrice)

        this.items.push(menuItem)
    }

    build() {
        this.items.forEach(item => {
            this.menuSection.appendChild(item)
        })

        return this.menuSection
    }
}
