import * as CLASS from './classnames';

// Check if `child` is a descendant of `parent`
const isDescendant = function(parent, child) {
    let node = child.parentNode;
    while (node) {
        if (node === parent) {
            return true;
        }

        // Traverse up to the parent
        node = node.parentNode;
    }

    // Go up until the root but couldn't find the `parent`
    return false;
};


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

    var removed = false;
    // edit task when enter is pressed
    form.addEventListener("keydown", (e) =>{
        if (e.key === "Enter"){ 
            task.textContent = e.target.value;
            form.removeEventListener("focusout", replaceTask);
            e.target.dispatchEvent(new Event("focusout"));
        }
    }); 
    // remove edit field when lose focus
    form.addEventListener("focusout", (e) => {
        replaceTask(e, task);
    });
}

const replaceTask = function(e, task){
    const parentNode = e.target.parentNode;
    parentNode.replaceChild(task, e.target);
}

const createTask = function(description, id){
    const taskItem = document.createElement("li");
    taskItem.classList.add("list-group-item");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add(CLASS.TASK);

    const taskForm = document.createElement("div");
    taskForm.classList.add("form-check");

    const taskCheck = document.createElement("input");
    taskCheck.classList.add(CLASS.TASK_CHECK, "form-check-input");
    taskCheck.type = "checkbox";
    taskCheck.value = "";
    taskCheck.id = id;

    const taskLabel = document.createElement("label");
    taskLabel.classList.add(CLASS.TASK_DESCRIPTION, "form-check-label");
    taskLabel.textContent = description;
    taskLabel.addEventListener("click", editText);

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