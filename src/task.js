import * as CLASS from './classnames';

const createTask = function(description, id){
    const task = document.createElement("li");

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
        task.remove();
    })

    taskForm.append(taskCheck, taskLabel);
    taskContainer.append(taskForm, removeBtn);
    task.append(taskContainer);
    return task;
}

export {createTask};