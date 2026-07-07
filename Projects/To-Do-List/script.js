const inputTask  = document.querySelector("input")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")


addBtn.addEventListener("click",() =>{

    if(inputTask.value === ""){
        return
    }

    const li = document.createElement("li")
    li.innerText = inputTask.value
    taskList.appendChild(li)

    
    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    li.append(delBtn)

    delBtn.addEventListener("click",()=>{
        li.remove()
    })

    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through"
    })


 inputTask.value = ""

})