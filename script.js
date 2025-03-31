const noteInputBox = document.querySelector(".input-box")
const createBtn = document.querySelector(".btn")
let notes = document.querySelectorAll(".input-data")

function showNodes(){
    noteInputBox.innerHTML = localStorage.getItem("notes")
}
showNodes()

function updateStorage(){
    localStorage.setItem("notes", noteInputBox.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    let img =document.createElement("img")
    inputBox.className = "input-data"
    inputBox.setAttribute("contenteditable", "true")
    img.src="images/delete.png"
    noteInputBox.appendChild(inputBox).appendChild(img)
})

noteInputBox.addEventListener("click", function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-data")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault()
    }
})