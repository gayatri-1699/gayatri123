document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.querySelector("button");
    const taskList = document.getElementById("taskList");

    // Add event listener to the "Add Task" button
    addTaskButton.addEventListener("click", addTask);

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    // Function to delete a task
    window.deleteTask = function (element) {
        const listItem = element.parentElement;
        taskList.removeChild(listItem);
    };
});