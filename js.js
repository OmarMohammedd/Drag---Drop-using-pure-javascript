const input = document.getElementById("input")
const btn = document.getElementById("btn")
const boxs = document.querySelectorAll(".box")
let drag = null 


btn.addEventListener("click" , () => {
  if (input.value != "") {
    boxs[0].innerHTML += `
    <p class="item" draggable="true">${input.value}</p>
    `
    input.value = ""
  } 
    draggable()
})


function draggable() {
  let items = document.querySelectorAll(".item")
  items.forEach(item => {
     item.addEventListener("dragstart" , () => {
        drag = item
        item.style.opacity = "0.5"
     })

     item.addEventListener("dragend" , () => {
      drag = null
      item.style.opacity = "1"
     })


    // boxs

    boxs.forEach(box => {
       box.addEventListener("dragover" , (eo) => {
        eo.preventDefault()
         box.style.background = "#090"
         box.style.color = "#fff"
       })
     box.addEventListener("dragleave" , () => {
      box.style.background = "#fff"
      box.style.color = "#000"
     })

     box.addEventListener("drop" , () => {
       box.append(drag)
       box.style.background = "#fff"
       box.style.color = "#000"
     })

    })

  })
}