const mainContainer = document.getElementById("root")

const reactElement = {
    type: "a",
    props: {
        href : "https://www.google.com/",
        target: "_blank"
    },
    children : "This is a custom react component"
}

const reactElement2 = {
    type: "img",
    props: {
        src:"https://imgv3.fotor.com/images/side/Overlay-images-and-adjust-transparency-to-create-double-exposure-effects-using-Fotor.jpg",
        alt: "image",
        style: "height:200px; width:200px"
    },
    children : "this is a image"
}

function render(mainContainer, reactElement){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    element.setAttribute("href", reactElement.props.href)
    element.setAttribute("target", reactElement.props.target)
    mainContainer.append(element)
}

function betterRender(mainContainer, reactElement){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === "children") continue;
        element.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.append(element)
}

render(mainContainer, reactElement)
betterRender(mainContainer, reactElement2)