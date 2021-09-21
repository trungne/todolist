const createTask = function(description){
    const task = document.createElement("li");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add(CLASS.TASK);

    const taskDescription = document.createElement("div");
    taskDescription.classList.add(CLASS.TASK_DESCRIPTION);
    taskDescription.textContent = description;
    taskDescription.setAttribute("contenteditable", true);

    const removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.innerHTML = "&times;";
    removeBtn.classList.add(CLASS.TASK_REMOVE_BUTTON, "btn", "btn-danger");
    removeBtn.addEventListener("click", () => {
        task.remove();
    })

    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(removeBtn);

    task.appendChild(taskContainer);
    return task;
}

export {createTask};