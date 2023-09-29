document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskF = document.getElementById('create-task-form');

  newTaskF.addEventListener('submit', newTask);
});

const newTask = event => {
  event.preventDefault();
  const newTaskDes = document.getElementById('new-task-description');
  const task = document.createElement('li');
  task.innerHTML = newTaskDes.value;
  appendTask(task);
  event.target.reset();
};

const appendTask = task => {
  document.getElementById('tasks').appendChild(task);
};
