let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";

    let items = taskList.querySelectorAll("li");

    items.forEach(item => {

        item.addEventListener("click", function () {
            item.classList.toggle("completed");
            saveTasks();
        });

        item.querySelector(".delete-btn").addEventListener("click", function (e) {
            e.stopPropagation();
            item.remove();
            saveTasks();
        });

    });
}

function addTask() {

    if(taskInput.value.trim()===""){
        alert("Please enter a task!");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <span>${taskInput.value}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.addEventListener("click",function(){
        li.classList.toggle("completed");
        saveTasks();
    });

    li.querySelector(".delete-btn").addEventListener("click",function(e){
        e.stopPropagation();
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);

    taskInput.value="";

    saveTasks();
}

loadTasks();