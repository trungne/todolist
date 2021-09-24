import { createTask } from '../task';

const containerID = "project-item"
const taskListID = "project-task-list";

const createProjectItem = function(title, description){
    // a div that wrap controls and project (which wraps a list of tasks)
    const container = document.createElement("div");
    container.style.height = "auto";
    container.id = containerID;

    const titleTag = document.createElement("h1");
    titleTag.classList.add("display-1", "text-center");
    titleTag.textContent = title;

    const descriptionTag = document.createElement("blockquote");
    descriptionTag.classList.add("text-center", "blockquote");
    descriptionTag.textContent = description;

    // an order list of tasks
    const taskList = document.createElement("ol");
    taskList.classList.add("list-group");
    taskList.id = taskListID;

    const controlBox = createProjectControlBox(container.id);
    container.append(titleTag, descriptionTag, controlBox, taskList);
    
    return container;
}

const createProjectControlBox = function(){
    // text field and confirm button to add task to project
    const controlBox = document.createElement("form");
    controlBox.classList.add("d-flex", "form-floating");
    controlBox.onsubmit = () => {return false;}
    
    // input text field
    const form = document.createElement("input");
    form.classList.add("form-control");
    form.type = "text";

    const label = document.createElement("label");
    label.textContent = "Enter a task"

    // add button
    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => {
        const container = document.querySelector("#" + containerID);
        const taskList = document.querySelector("#" + taskListID);
        // check empty input
        if (!form.value){
            // only add one warning
            if (!container.querySelector(".alert-warning")){
                container.insertBefore(createWarning("Doing nothing is not quite a task, right?"), controlBox.nextSibling);
            }
            return;
        }

        taskList.appendChild(createTask(form.value));

        // reset text field
        form.value = "";
    });

    controlBox.append(form, label, addBtn);
    return controlBox;
}



export {createProjectItem};