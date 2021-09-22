import * as CLASS from './classnames';

const editText = function(event){
    const task = event.target;
    const parent = task.parentNode;

    const form = document.createElement("input");
    form.type = "text";
    form.value = task.textContent;
    form.classList.add("form-text");
    parent.replaceChild(form, task);

    form.focus();
    form.select();

    // edit task when enter is pressed
    form.addEventListener("keydown", (e) =>{
        if (e.key === "Enter"){ 
            task.textContent = e.target.value;
            e.target.dispatchEvent(new Event("focusout"));
        }
    }); 

    // remove edit field when lose focus
    form.addEventListener("focusout", (e) => {
        try {
            replaceTask(e, task);   
        } catch (error){
            // ignore
        }
        
    });
}

const replaceTask = function(e, task){
    const parentNode = e.target.parentNode;
    parentNode.replaceChild(task, e.target);
}

const createTask = function(description){
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add(CLASS.TASK);

    const taskForm = document.createElement("div");
    taskForm.classList.add("form-check");

    const taskCheck = createTaskCheckBox();
    taskCheck.addEventListener("click", () => {
        completeTask(taskItem);
    })

    const taskLabel = createTaskLabel(description);
    const removeBtn = createRemoveButton();
    removeBtn.addEventListener("click", () => {
        removeTask(taskItem);
    })

    taskForm.append(taskCheck, taskLabel);
    taskContainer.append(taskForm, removeBtn);
    taskItem.append(taskContainer);
    return taskItem;
}

const createTaskCheckBox = function(){
    const taskCheck = document.createElement("input");
    taskCheck.classList.add(CLASS.TASK_CHECK, "form-check-input");
    taskCheck.type = "checkbox";
    
    return taskCheck;
}

const createTaskLabel = function(description){
    const taskLabel = document.createElement("label");
    taskLabel.classList.add(CLASS.TASK_DESCRIPTION, "form-check-label");
    taskLabel.textContent = description;
    taskLabel.addEventListener("click", editText);

    return taskLabel;
}

const createRemoveButton = function(){
    const removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.innerHTML = "&times;";
    removeBtn.classList.add(CLASS.TASK_REMOVE_BUTTON, "btn", "btn-danger", "btn-sm");
    
    return removeBtn;
}

const completeTask = function(task){
    task.remove();
    // future feature: cross task from calendar
}

const removeTask = function(task){
    task.remove();
    // future feature: remove task from calendar
}

export {createTask};