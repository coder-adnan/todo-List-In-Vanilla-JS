const addBtn = document.querySelector('#add-btn');
const newTaskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');
let tasks = [];

function addTask(event) {
  event.preventDefault();
  const newTaskName = newTaskInput.value.trim();

  if (newTaskName) {
    tasks.push(newTaskName);
    renderTasks();
    newTaskInput.value = '';
  }
}

function deleteTask(event) {
  if (event.target.classList.contains('delete-btn')) {
    const taskName = event.target.previousElementSibling.textContent;
    tasks = tasks.filter((task) => task !== taskName);
    renderTasks();
  }
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskHtml = `
      <li>
        <span class="task-name">${task}</span>
        <button class="delete-btn">Delete</button>
      </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskHtml);
  });
}

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);

