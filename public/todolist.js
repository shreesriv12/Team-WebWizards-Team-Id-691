const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;
    const deadline = document.getElementById('task-deadline').value;
    const genre = document.getElementById('task-genre').value;
    const priority = document.getElementById('task-priority').value;

    const task = {
        id: Date.now(),
        title,
        details,
        deadline,
        genre,
        priority: parseInt(priority)
    };

    tasks.push(task);
    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.sort((a, b) => a.priority - b.priority).forEach(task => {
        const li = document.createElement('li');
        li.className = 'task';
        li.innerHTML = `
            <div class="task-title">${task.title} (Priority: ${task.priority})</div>
            <div>${task.details}</div>
            <div>Genre: ${task.genre}</div>
            <div>Deadline: ${task.deadline}</div>
            <button class="edit-button" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-details').value = task.details;
    document.getElementById('task-deadline').value = task.deadline;
    document.getElementById('task-genre').value = task.genre;
    document.getElementById('task-priority').value = task.priority;

    deleteTask(id);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
