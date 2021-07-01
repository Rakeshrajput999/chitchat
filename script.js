
const input =document.querySelector("#input")
const btn = document.querySelector("#add")
const todolist =document.querySelector(".todolist")



btn.addEventListener("click",()=>{

    const newtodo =document.createElement('div')
    newtodo.innerHTML =input.value
    newtodo.style.margin="3px"
    todolist.appendChild(newtodo)
    input.value=""

})


    



