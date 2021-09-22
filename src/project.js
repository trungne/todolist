import * as CLASS from './classnames';
import { createTask } from './task';


const createProjectMenu = function(){
    const div = document.createElement("div");
    div.classList.add(CLASS.PROJET_MENU);

    const p = document.createElement("p");
    p.classList.add("lead");
    p.textContent = "A collection of your projects";

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-primary");
    button.textContent = "Create new project";
    button.addEventListener("click", () => {
        div.append(createNewProject());
    });

    div.append(p, button);
    return div;
}


const createNewProject = function(){
    const div = document.createElement("div");
    div.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Project title";

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "Project description";

    const addBtn = document.createElement("button");
    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Open project";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        div.remove();
    })

    cardBody.append(cardTitle, cardText, addBtn, deleteBtn);
    div.append(cardBody);
    return div;
}


const createProjectControlBox = function(){
    // text field and confirm button to add task to project
    const controlBox = document.createElement("form");
    controlBox.classList.add(CLASS.PROJECT_CONTROL_BOX, "form-floating");
    controlBox.onsubmit = () => {return false;}
    
    // input text field
    const form = document.createElement("input");
    form.classList.add(CLASS.PROJECT_TEXT_FIELD, "form-control");
    form.type = "text";

    const label = document.createElement("label");
    label.textContent = "Enter a task"

    // add button
    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", addBtnHandler);

    controlBox.append(form, label, addBtn);
    return controlBox;
}

const createProject = function(description){
    // a div that wrap controls and project (which wraps a list of tasks)
    const container = document.createElement("div");
    container.classList.add(CLASS.PROJECT_CONTAINER);
    
    const descriptionTag = document.createElement("h2");
    descriptionTag.classList.add(CLASS.PROJECT_DESCRIPTION);
    descriptionTag.textContent = description;
    // descriptionTag.addEventListener("mouseenter", addEditBtn);
    // descriptionTag.addEventListener("mouseleave", removeEditBtn);
    
    descriptionTag.title = "Click to edit";
    descriptionTag.setAttribute("contenteditable", true)

    // an order list of tasks
    const taskList = document.createElement("ol");
    taskList.classList.add(CLASS.TASK_LIST, "list-group");

    const controlBox = createProjectControlBox(container.id);
    container.append(descriptionTag, controlBox, taskList);
    
    return container;
}

const createEditBtn = function(){
    const btn = document.createElement("button");
    btn.classList.add("btn", "btn-light", "btn-sm");
    btn.textContent = "Edit";
    btn.type = "button";
    return btn;
}

const addEditBtn = function(event){
    const container = event.target;
    const btn = container.querySelector(".btn");
    if (!btn){
        container.append(createEditBtn());
    }
}

const removeEditBtn = function(event){
    const container = event.target;
    const btn = container.querySelector(".btn");
    if (btn){
        btn.remove();
    }
}

const addBtnHandler = function(){
    const container = document.querySelector("." + CLASS.PROJECT_CONTAINER);
    const controlBox = container.querySelector("." + CLASS.PROJECT_CONTROL_BOX);
    const textField = container.querySelector("." + CLASS.PROJECT_TEXT_FIELD);
    const taskList = container.querySelector("." + CLASS.TASK_LIST);
    
    // check empty input
    if (!textField.value){
        // only add one warning
        if (!container.querySelector(".alert-warning")){
            container.insertBefore(createWarning("Doing nothing is not quite a task, right?"), controlBox.nextSibling);
        }
        return;
    }
    
    taskList.appendChild(createTask(textField.value));
    textField.value = "";
}

const createWarning = function(message){
    const div = document.createElement("div");
    div.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
    div.setAttribute("role", "alert");
    div.textContent = message;
    
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("data-dismiss", "alert");
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.setAttribute("data-bs-dismiss", "alert");
    closeBtn.classList.add("btn-close");

    // close icon
    div.appendChild(closeBtn);
    return div;
}

export {createProjectMenu};