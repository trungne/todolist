import * as CLASS from './classnames';

const createTask = function(description, id){
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add(CLASS.TASK);

    const taskForm = document.createElement("div");
    taskForm.classList.add("form-check");

    const taskCheck = document.createElement("input");
    taskCheck.classList.add(CLASS.TASK_CHECK, "form-check-input");
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.setAttribute("value", "");
    taskCheck.id = id;

    const taskLabel = document.createElement("label");
    taskLabel.classList.add(CLASS.TASK_DESCRIPTION, "form-check-label");
    taskLabel.textContent = description;
    taskLabel.setAttribute("contenteditable", true);
    // taskLabel.setAttribute("for", taskCheck.id);

    const removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.innerHTML = "&times;";
    removeBtn.classList.add(CLASS.TASK_REMOVE_BUTTON, "btn", "btn-danger", "btn-sm");
    removeBtn.addEventListener("click", () => {
        taskItem.remove();
    })

    taskForm.append(taskCheck, taskLabel);
    taskContainer.append(taskForm, removeBtn);
    taskItem.append(taskContainer);
    return taskItem;
}

export {createTask};