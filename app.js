// console.log("Omars List")
const btn = document.getElementById("submit-button")
// const inpt = document.getElementById("list-items")
const ul = document.getElementById("todo-list")
console.log(btn)
btn.addEventListener("click" , function(evt){
    const li = document.createElement('li')
    const inpt = document.getElementById("list-items")
    li.textContent = inpt.value
    document.querySelector("ul").appendChild(li)
    inpt.value=""
    console.log(inpt.value)

  });