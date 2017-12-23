console.log("hello");

const input = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const panel = document.querySelector(".todo__ctrl-panel");
let taskCounter = 0;
// let taskStorage = (JSON.parse(taskStorage)) ? [localStorage.getItem('taskStorage',JSON.parse(taskStorage)) : [];
let taskStorage = [];
let getStorage = localStorage.getItem('taskStorage');
let filteredTasks = [];

console.log(getStorage);

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
  localStorage.setItem('taskStorage',JSON.stringify(taskStorage));
};

function changeState(taskId) {
  taskStorage = taskStorage.map(function(elem){
    if (elem.id === taskId) {
      elem.completed = !elem.completed;
    }
    return elem;
  });
  localStorage.setItem('taskStorage',JSON.stringify(taskStorage));
};

function showCompletedTasks (sortedArray) {
  filteredTasks = taskStorage.filter(function(elem){
    return elem.completed;
  });
};

function showActiveTasks (sortedArray) {
  filteredTasks = taskStorage.filter(function(elem){
    return !elem.completed;
  });
};

function updatetaskCounter() {
  let completedTask = taskStorage.filter(function(elem){
    return !elem.completed;
  });
  return taskCounter = completedTask.length;
}

function deleteCompletedTasks (someArr) {
  taskStorage = taskStorage.filter(function(elem){
     return !elem.completed;
  });
  localStorage.setItem('taskStorage',JSON.stringify(taskStorage));
}

function renderTasks(taskArr) {
  todoList.innerHTML = "";
  panel.innerHTML = "";

  for (let i = 0; i < taskArr.length; i++) {
    let li = document.createElement("li");
    let label = document.createElement("label");
    let check = document.createElement("input");
    let fakeCheck = document.createElement("div");
    let taskText = document.createElement("p");
    let closeBtn = document.createElement("span");
    li.classList.add("todo__item");
    li.setAttribute("data-id", taskArr[i].id);
    label.setAttribute("for", taskArr[i].id);
    check.type = "checkbox";
    check.classList.add("check");
    check.setAttribute("id", taskArr[i].id);
    fakeCheck.classList.add("check__fake");
    taskText.classList.add("todo__text");
    taskText.innerHTML = taskArr[i].content;
    closeBtn.classList.add("close-btn");

    if (taskArr[i].completed) {
      taskText.classList.add("completed");
      li.classList.add("completed");
      check.checked = true;
    }

    li.appendChild(label);
    li.appendChild(taskText);
    li.appendChild(closeBtn);

    label.appendChild(check);
    label.appendChild(fakeCheck);
    todoList.appendChild(li);

  }

  
  let counter = document.createElement('span');
  let showAll = document.createElement('button');
  let showCompleted = document.createElement('button');
  let showActive = document.createElement('button');
  let deleteCompleted = document.createElement('button');


  counter.classList.add('todo__counter');
  showAll.classList.add('btn','btn__all');
  showCompleted.classList.add('btn','btn__completed' );
  showActive.classList.add('btn','btn__active' );
  deleteCompleted.classList.add('btn','btn__delete');

  taskCounter = updatetaskCounter();
  if(taskCounter > 1){
    counter.innerHTML = taskCounter + " items left";
  } else {
    counter.innerHTML = taskCounter + " item left";
  }
  
  showAll.innerHTML = "All";
  showCompleted.innerHTML = "Completed";
  showActive.innerHTML = "Active";
  deleteCompleted.innerHTML = "Delete completed";

  
  panel.appendChild(counter);
  panel.appendChild(showAll);
  panel.appendChild(showCompleted);
  panel.appendChild(showActive);
  panel.appendChild(deleteCompleted);

}

function deleteTask(id) {
  taskStorage = taskStorage.filter(function(elem) {
    return elem.id !== id;
  });
  localStorage.setItem('taskStorage',JSON.stringify(taskStorage));
};

// *******************************function for task editing********************

function editTask(id,elem, text) {
  while(elem.firstChild){
    elem.removeChild(elem.firstChild);
  };

  var editInput = document.createElement('input');
  editInput.value = text;
  editInput.classList.add('edit')
  elem.appendChild(editInput);

};

input.addEventListener("keyup", function(e) {
  if (e.keyCode !== 13) return;
  if (input.value === "") return;

  const taskContent = input.value;
  addToStorage(taskContent);
  console.log(taskStorage);
  renderTasks(taskStorage);
  input.value = "";
});

todoList.addEventListener("click", function(e) {
  const target = e.target;
  
  console.log(target);
  if (e.target.classList.contains("check")) {
    const checkId = target.parentNode.getAttribute("for");
    changeState(checkId);
    renderTasks(taskStorage);
    
  } else if (e.target.classList.contains("close-btn")) {
    const id = target.parentNode.getAttribute("data-id");
    console.log(id);
    console.log("close");
    deleteTask(id);
    renderTasks(taskStorage);
  }
});

// *****************************Editing on double click*****************************

todoList.addEventListener('dblclick', function (e){
  const elem = e.target;
  if(!elem.classList.contains("todo__text")) return;
  const elemId = elem.parentNode.getAttribute("data-id");
  const li = elem.closest('li');
  const taskContent = elem.innerHTML;
  console.log("dbclik  " + elemId);
  console.log("dbclik  " + taskContent);
  editTask(elemId,li,taskContent);


});

panel.addEventListener("click", function(e) {
  const elem = e.target;

  if(elem.classList.contains('btn__completed')){
    showCompletedTasks(filteredTasks);
    renderTasks(filteredTasks);
  } else if (elem.classList.contains('btn__active')) {
    showActiveTasks(filteredTasks);
    renderTasks(filteredTasks);
  } else if (elem.classList.contains('btn__all')) {
    renderTasks(taskStorage);
  } else if (elem.classList.contains('btn__delete')) {
    deleteCompletedTasks(taskStorage);
    renderTasks(taskStorage);

  }
  
});


document.addEventListener('DOMContentLoaded', renderTasks(taskStorage));

