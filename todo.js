const wrapper = document.querySelector('.wrapper');
const input = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const panel = document.querySelector(".todo__ctrl-panel");
const counter = document.querySelector('.todo__counter');
let taskCounter = 0;
// let taskStorage = (JSON.parse(taskStorage)) ? [localStorage.getItem('taskStorage',JSON.parse(taskStorage)) : [];
let taskStorage = [];
let getStorage = localStorage.getItem('taskStorage');
let filteredTasks = [];

taskStorage = getStorage ? JSON.parse(getStorage) : [];

function generateId() {
  return Date.now().toString();
};

function addToStorage(value) {
  taskStorage.push({
    id: generateId(),
    completed: false,
    content: value
  });
  localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
};

function changeState(taskId) {
  taskStorage = taskStorage.map(function (elem) {
    if (elem.id === taskId) {
      elem.completed = !elem.completed;
    }
    return elem;
  });
  localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
};

function showCompletedTasks(sortedArray) {
  filteredTasks = taskStorage.filter(function (elem) {
    return elem.completed;
  });
};

function showActiveTasks(sortedArray) {
  filteredTasks = taskStorage.filter(function (elem) {
    return !elem.completed;
  });
};

function updatetaskCounter() {
  let completedTask = taskStorage.filter(function (elem) {
    return !elem.completed;
  });
  return taskCounter = completedTask.length;
}

function updateCounter() {
  taskCounter = updatetaskCounter();

  if (taskCounter > 1) {
    counter.innerHTML = taskCounter + " items left";
  } else {
    counter.innerHTML = taskCounter + " item left";
  }

}

function deleteCompletedTasks(someArr) {
  taskStorage = taskStorage.filter(function (elem) {
    return !elem.completed;
  });
  localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
}

function renderTask(task) {
  let li = document.createElement("li");
  let label = document.createElement("label");
  let check = document.createElement("input");
  let fakeCheck = document.createElement("div");
  let taskText = document.createElement("p");
  let closeBtn = document.createElement("span");
  let input = document.createElement("input");

  li.classList.add("todo__item");
  li.setAttribute("data-id", task.id);
  label.setAttribute("for", task.id);
  check.type = "checkbox";
  check.classList.add("check");
  check.setAttribute("id", task.id);
  fakeCheck.classList.add("check__fake");
  taskText.classList.add("todo__text");
  taskText.innerHTML = task.content;
  closeBtn.classList.add("close-btn");
  input.classList.add("todo__edit");
  input.value = task.content;

  if (task.completed) {
    taskText.classList.add("completed");
    li.classList.add("completed");
    check.checked = true;
  }

  li.appendChild(label);
  li.appendChild(taskText);
  li.appendChild(closeBtn);
  li.appendChild(input);
  label.appendChild(check);
  label.appendChild(fakeCheck);

  todoList.appendChild(li);
}

function displayPanel() {
  if (!taskStorage.length) {
    panel.classList.add('hide');
  } else {
    panel.classList.remove('hide');
  }
};

function renderAllTasks(taskArr) {
  todoList.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
    renderTask(taskArr[i]);
  }

  updateCounter();
  displayPanel();
};

function deleteTask(id, elem) {
  taskStorage = taskStorage.filter(function (elem) {
    return elem.id !== id;
  });
  localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
  elem.remove();
};



input.addEventListener("keyup", function (e) {
  if (e.keyCode !== 13) return;
  if (input.value === "") return;

  const taskContent = input.value;
  addToStorage(taskContent);
  renderTask(taskStorage[taskStorage.length - 1]);
  updateCounter();
  displayPanel();

  input.value = "";
});

todoList.addEventListener("click", function (e) {
  const target = e.target;

  console.log(target);
  if (e.target.classList.contains("check")) {
    const checkId = target.parentNode.getAttribute("for");
    changeState(checkId);
    renderAllTasks(taskStorage);

  } else if (e.target.classList.contains("close-btn")) {
    const li = target.parentNode;
    const id = li.getAttribute("data-id");

    deleteTask(id, li);
    updateCounter();
    displayPanel();
  }
});

// *****************************Editing on double click*****************************

todoList.addEventListener('dblclick', function (e) {
  const elem = e.target;
  // if(!elem.classList.contains("todo__text")) return;

  if (elem.classList.contains('todo__text') ||
    elem.classList.contains('todo__item')) {
    const li = elem.closest('li');
    const input = li.querySelector('.todo__edit');
    const inputs = todoList.querySelectorAll('.todo__edit');

    inputs.forEach(function (item) {
      item.classList.remove('show');
    });
    input.classList.add('show');
    input.focus();

  } else {
    return;
  }
  // const li = elem.closest('li');
  // const input = li.querySelector('.todo__edit');


});

todoList.addEventListener('keyup', function (e) {
  const elem = e.target;
  if (!elem.classList.contains('todo__edit')) return;
  const li = elem.closest('li');
  const taskText = li.querySelector('.todo__text');
  const id = li.getAttribute('data-id');
  console.log(id);
  const value = elem.value;
  const task = taskStorage.find(function (item) {
    return item.id === id;
  });
  console.log(task);
  if (e.keyCode === 13) elem.classList.remove('show');
  if (value) {
    taskText.innerText = value;
    task.content = value;
  }
})

panel.addEventListener("click", function (e) {
  const elem = e.target;

  if (elem.classList.contains('btn__completed')) {
    showCompletedTasks(filteredTasks);
    renderAllTasks(filteredTasks);
  } else if (elem.classList.contains('btn__active')) {
    showActiveTasks(filteredTasks);
    renderAllTasks(filteredTasks);
  } else if (elem.classList.contains('btn__all')) {
    renderAllTasks(taskStorage);
  } else if (elem.classList.contains('btn__delete')) {
    deleteCompletedTasks(taskStorage);
    renderAllTasks(taskStorage);

  }

});

wrapper.addEventListener('click', function (e) {
  const elemClassList = e.target.classList;
  if (elemClassList.contains('todo__edit') &&
    elemClassList.contains('show')) return;

  const input = wrapper.querySelector('.todo__edit.show');

  if (input) input.classList.remove('show');
})


document.addEventListener('DOMContentLoaded', renderAllTasks(taskStorage));