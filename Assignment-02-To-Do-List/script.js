
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount() {
    const total = taskList.children.length;
    const remaining = taskList.querySelectorAll(
        "li:not(.completed)"
    ).length;

    taskCount.textContent =
        `${total} tasks • ${remaining} remaining`;
}

function addTask() {
    const taskText = taskInput.value.trim();

    // Do not add an empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;
    li.title = "Click to complete; double-click to delete";

    // Click to mark the task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateTaskCount();
    });

    // Double-click to delete the task
    li.addEventListener("dblclick", function () {
        li.remove();
        updateTaskCount();
    });

    // Add the task to the page
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();

    updateTaskCount();
}

// Add a task when the button is clicked
addButton.addEventListener("click", addTask);

// Also allow the Enter key to add a task
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

updateTaskCount();
