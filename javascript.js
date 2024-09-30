const grid = document.querySelector(".grid")
const btnCont = document.querySelector(".btnContainer")
const gridGen = document.querySelector("#gridGen")
const newGen = document.querySelector("#newGen")

function removeGrid(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
}

function createGrid(){
    for(let i=0;i<(16*16);i++){
        let box = document.createElement("div")
        box.setAttribute("class", "box")
        grid.appendChild(box)
        const boxed = document.querySelectorAll(".box")
        boxed.forEach((box) => {
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "gray"
            })
            box.addEventListener("mouseleave", () => {
                box.style.backgroundColor = "black"
            })
        })
    }
}

function createCustomGrid(input){
    input = parseInt(prompt("boxes per side? min 8 max 100"))
    let ratio = parseFloat(100/input)
    let boxSize = "height:"+ratio+"%;width:"+ratio+"%; margin: 0px;"
    if (input>100||input<8){
        input = parseInt(prompt("Minimum 8, maximum 100"))
    }else
        for(let i=0;i<(input*input);i++){
            let box = document.createElement("div")
            box.setAttribute("class", "box")
            box.style.cssText = boxSize
            grid.appendChild(box)
        }
    const boxed = document.querySelectorAll(".box")
    boxed.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "gray"
        })
        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "black"
        })
    })
}

function generateCustomGrid(){
    removeGrid()
    createCustomGrid()
}

function generateDefaultGrid(){
    removeGrid()
    createGrid()
}

gridGen.addEventListener("click", generateCustomGrid)    
newGen.addEventListener("click", generateDefaultGrid)

createGrid();

