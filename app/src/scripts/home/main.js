/* import "./../../config/global_conf.js"

const lib = await import(hyperLibsUrl + "test.js")

lib.test() */
import * as modulo from "./../commons/modulos.js"

const prepareDocument = async () => {
    const appBox = modulo.newElement(document.body, "div", "appBox", "appBox")
    const globalStyle = await modulo.newElement(document.head, "style", null, "globalStyle")
    globalStyle.textContent += `
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
            
        body {
            width: 100vw;
            height: 100vh;

            .appBox {
                position: relative;
                width: 100vw;
                height: 100vh;
            }
        }
    `
}

const main = async () => {
    await prepareDocument()
    import("./../commons/viewsManager.js")
}

main()

