//HTML
let body = document.querySelector("body")

let button = document.createElement("button");
button.id = "setNSquares";
button.textContent = "Set number of squares per side"
body.appendChild(button)

let container = document.createElement("div");
container.classList.add("container")
body.append(container)

createSquares(100)

function createSquares(sideSize) {
    let numberOfSquares = sideSize*sideSize
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div")
        square.classList.add("square")
        square.style.cssText += `width: ${300/sideSize}px; height: ${300/sideSize}px`
        container.appendChild(square)
        square.addEventListener("mouseover", () => {
            square.style.cssText += "background: brown;"
        })
    }
}