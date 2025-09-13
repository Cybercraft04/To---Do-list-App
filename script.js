document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const addTask = document.getElementById("addTask");
    const listContainer = document.getElementById("list-container");

    addTask.addEventListener("click", function() {
        const taskText = inputBox.value.trim();
        
        if (taskText === '') {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;
        listContainer.appendChild(li);
let span = document.createElement("span");
span.innerHTML = "\u00d7"
li.appendChild(span);

        // Clear input after adding task
        inputBox.value = " ";
    });
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
        }
       else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
       }
    },false);
});
