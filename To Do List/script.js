const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  if (taskInput.value.trim() === "") {
    alert("Write Something.");
    return;
  }

    let li = document.createElement("li");

    li.innerHTML = taskInput.value;

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete-btn";

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    saveData();
    taskInput.value = "";
    
}

taskList.addEventListener("click", function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove()
        saveData();
    }
})

taskInput.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {
        addTask();
    }

});

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem("data") || "";
}

showData();
