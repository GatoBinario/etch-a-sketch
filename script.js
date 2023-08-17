//HTML
let body = document.querySelector("body")

let button = document.createElement("button");
button.id = "setNSquares";
button.textContent = "Set number of squares per side"
body.appendChild(button)

let container = document.createElement("div");
container.classList.add("container")
body.append(container)

createSquares(10)

function createSquares(sideSize) {
    let squaresToRemove = document.querySelectorAll(".square");
    squaresToRemove.forEach(square => {
        container.removeChild(square);
    });
    let numberOfSquares = sideSize*sideSize
    for (let i = 0; i < numberOfSquares; i++) {
        let square = document.createElement("div")
        square.classList.add("square")
        square.style.cssText += `width: ${300/sideSize}px; height: ${300/sideSize}px`
        container.appendChild(square)
        square.addEventListener("mouseover", () => {
            let hexString = Math.round(Math.random()*4294967296/100000)*100000;
            hexString = hexString.toString(16);
            //debugger;
            square.style.cssText += `background: #${hexString};`
        })
    }
}


button.addEventListener("click", () => {
    let numberOfSquares = prompt("Number of squares (side): ", 16);
    numberOfSquares > 100 ? alert("Number should be lower than 101") : createSquares(numberOfSquares); 
})