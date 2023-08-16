//HTML
let body = document.querySelector("body")

let button = document.createElement("button");
button.id = "setNSquares";
button.textContent = "Set number of squares per side"
body.appendChild(button)

let container = document.createElement("div");
container.classList.add("container")
body.append(container)

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)
    square.addEventListener("mouseover", () => {
        square.style.cssText = "background: brown;"
    })
}
