const grid = document.querySelector(".grid")
const btnCont = document.querySelector(".btnContainer")
const gridGen = document.querySelector("#gridGen")
const newGen = document.querySelector("#newGen")
const color = document.querySelector("#color")



function boxPainter(){
    const boxed = document.querySelectorAll(".box")

    boxed.forEach((box) => {
        box.style.opacity = 0.1
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "gray"
        })
        box.addEventListener("mouseleave", () => {
            
            //REMOVE THESE LINES TO MAKE THE BOX COLOR RANDOM
            /*let red = 60 +parseInt(Math.random()*100)
            let blue = 70 +parseInt(Math.random()*100)
            let green = 50 +parseInt(Math.random()*100)
            let randomColor = "rgba("+red+","+blue+","+green+")"
            box.style.backgroundColor = randomColor*/


            box.style.backgroundColor = "black"
            box.style.opacity = (parseFloat(box.style.opacity||1)+0.1)

        })

    })
}

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
    }
    boxPainter()

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
    boxPainter()
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

