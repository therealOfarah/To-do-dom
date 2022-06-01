// console.log("Omars List")
const btn = document.getElementById("submit-button")
const ul = document.getElementById("todo-list")
const revBtn = document.getElementById("reverse-button")
const form = document.querySelector("form")


form.addEventListener('submit', function(evt) {
  evt.preventDefault()
 
})
// const list =document.getElementById("To-do").style.textAlign ="center"
btn.addEventListener("click" , function(evt){
    const li = document.createElement('li')
    const inpt = document.getElementById("list-items")
    list.classname = "list"
    li.textContent = inpt.value 
    
    if(li.textContent === ""){   
    }
    else{
      document.querySelector("ul").appendChild(li)
    }
    inpt.value=""
    
  });
ul.addEventListener("click", onClick)

function onClick(event){
  event.target.hidden =true
} 