import * as modulo from "./../../scripts/commons/modulos.js" // shadowRoot

const createSection = async () => {
    const homeView = await modulo.newElement(document.body.querySelector("#appBox"), "section", "landing", "landing")
    const viewDom = homeView.attachShadow({mode: "open"})
    return {"section": homeView, "dom": viewDom}
}

const createBoxes = async(section, dom) => {
// crear nav y main
}


const main = async () => {
    const view = await createSection()
    await creteBoxes(view.section, view.dom)
}

main()