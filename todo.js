console.log("hello");

const input = document.querySelector('.todo__input');
const todoList = document.querySelector('.todo__list');
let taskStorage = [];


function generateId(){
    return  Date.now().toString();
};

console.log(generateId());

function addToStorage(value){
    taskStorage.push({
        id : generateId(),
        completed: false,
        content: value
    });
};

function renderTasks(taskArr){
    todoList.innerHTML = "";

    for(let i = 0; i<taskArr.length; i++){
        let li = document.createElement('li');
        let label = document.createElement('label');
        let check = document.createElement('input');
        let fakeCheck = document.createElement('div');
        let taskText = document.createElement('p');
        let closeBtn = document.createElement('span');
        li.classList.add('todo__item');
        li.setAttribute("data-id", taskArr[i].id);
        label.setAttribute("for", taskArr[i].id);
        check.type = 'checkbox';
        check.classList.add('check');
        check.setAttribute("id", taskArr[i].id);
        fakeCheck.classList.add('check__fake');
        taskText.classList.add('todo__text');
        taskText.innerHTML = taskArr[i].content;
        closeBtn.classList.add('close-btn');

        if(taskArr[i].completed){
            taskText.classList.add('completed');
            li.classList.add('completed');
        }
        
        li.appendChild(label);
        li.appendChild(taskText);
        li.appendChild(closeBtn);

        label.appendChild(check);
        label.appendChild(fakeCheck);
        todoList.appendChild(li);
    }

}

function deleteTask(id){
    taskStorage = taskStorage.filter(function(elem){
        return elem.id !== id;
    });
};

input.addEventListener("keyup", function(e){
    
    if(e.keyCode !== 13) return;
    
    const taskContent = input.value;
    addToStorage(taskContent);
    console.log(taskStorage);
    renderTasks(taskStorage);
    input.value = '';
});

todoList.addEventListener('click', function(e){
    const target = e.target;
    console.log(target);
    if(e.target.classList.contains('check')){
        console.log("check");
        // taskText.classList.add('completed');
    } else if(e.target.classList.contains('close-btn')) {
        const id = target.parentNode.getAttribute('data-id');
        console.log(id);
        console.log("close");
        deleteTask(id);
        renderTasks(taskStorage);


    }

});

console.log(todoList);