const newTask = document.querySelector('#new-task');
const form = document.querySelector('form');
const toDoUl = document.querySelector('.items');
const completeUl = document.querySelector('.complete-list ul');

let createTask = function(task){
    let listItem = document.createElement('li');
    let label = document.createElement('label');
    let checkBox = document.createElement('input');

    label.innerText = task;
    checkBox.type= 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    toDoUl.appendChild(listItem);
    newTask.value = " ";

    // bind the new list item to the incomplete list 
    bindInCompleteItems(listItem, completeTask);

}

let completeTask = function(){
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);


}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}


let bindCompleteItems = function(taskItem, deleteBtnClick){
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnClick;
}

for(let i = 0; i < toDoUl.children.length; i++){
    bindInCompleteItems(toDoUl.children[i], completeTask);
}
for(let i = 0; i < completeUl.children.length; i++ ){
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);