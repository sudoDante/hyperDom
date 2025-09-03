export const newElement = async (container, label, idName = null, classNames = null) => {
    if (!label || !container) {
        console.log("module newElement: missing parameters\nnot create element")
        return
    }
    const createdElement = document.createElement(label)
    container.appendChild(createdElement)
    if (idName) createdElement.id = idName
    if (classNames) createdElement.className = classNames
    return createdElement
}

export const applyStyle = (item, style) => {
    Object.entries(style).forEach(([key, value]) => {
        item.style[key] = value
    })
}