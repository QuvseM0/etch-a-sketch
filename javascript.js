const div = document.querySelector(".grid")
const btnCont = document.querySelector(".btnContainer")
let newGen = document.querySelector(".newGen")


for(let i=0;i<(16*16);i++){
    let box = document.createElement("div")
    box.setAttribute("class", "box")
    div.appendChild(box)
}

let boxed = document.querySelectorAll(".box")
    boxed.forEach((box) => {
        
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "gray"
        })
        
        box.addEventListener("mouseleave", () => {
            box.style.backgroundColor = "black"
        })

    })

    
    