// Get HTML elements
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// Create the task form
taskForm.innerHTML = `
    <div class="form-group">
        <label for="taskName">Task Name</label>
        <input type="text" id="taskName" placeholder="Enter task name">
    </div>

    <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" placeholder="Enter subject">
    </div>

    <div class="form-group">
        <label for="dueDate">Due Date</label>
        <input type="date" id="dueDate">
    </div>

    <div class="form-group">
        <label for="priority">Priority</label>
        <select id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
    </div>

    <button class="add-btn" onclick="addTask()">Add Task</button>
`;

// Add a new task
function addTask() {

    const taskName = document.getElementById("taskName").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;

    // Check whether required fields are filled
    if (taskName === "" || subject === "" || dueDate === "") {
        alert("Please fill all the fields.");
        return;
    }

    // Create task element
    const task = document.createElement("div");

    task.className = `task ${priority}`;

    task.innerHTML = `
        <div class="task-info">
            <h3>${taskName}</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Due Date:</strong> ${dueDate}</p>
            <p><strong>Priority:</strong> ${priority}</p>
        </div>

        <div class="task-actions">
            <button class="complete-btn" onclick="completeTask(this)">
                Complete
            </button>

            <button class="delete-btn" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    // Add task to task list
    taskList.appendChild(task);

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").value = "high";
}

// Mark task as completed
function completeTask(button) {

    const task = button.parentElement.parentElement;

    task.classList.toggle("completed");

    if (task.classList.contains("completed")) {
        button.textContent = "Completed";
    } else {
        button.textContent = "Complete";
    }
}

// Delete task
function deleteTask(button) {

    const task = button.parentElement.parentElement;

    task.remove();
}
