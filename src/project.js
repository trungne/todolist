import * as CLASS from './classnames';
import 'bootstrap';
import { createTask } from './task';

const createProjectControlBox = function(containerID){
    // text field and confirm button to add task to project
    const controlBox = document.createElement("form");
    controlBox.classList.add(CLASS.PROJECT_CONTROL_BOX);
    controlBox.onsubmit = () => {return false;}
    
    // text field
    const form = document.createElement("input");
    form.classList.add(CLASS.PROJECT_TEXT_FIELD, "form-control");
    form.type = "text";
    form.placeholder = "Enter a task...";

    // add button
    const addBtn = document.createElement("button");
    addBtn.type = "submit";
    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Add";
    addBtn.setAttribute("projectID", containerID);
    addBtn.addEventListener("click", addBtnHandler);
    

    controlBox.append(form, addBtn);
    return controlBox;
}

const createProject = function(id, description){
    // a div that wrap controls and project (which wraps a list of tasks)
    const container = document.createElement("div");
    container.classList.add(CLASS.PROJECT_CONTAINER);
    container.id = id;

    const descriptionTag = document.createElement("h2");
    descriptionTag.classList.add(CLASS.PROJECT_DESCRIPTION);
    descriptionTag.textContent = description;

    // an order list of tasks
    const project = document.createElement("ol");
    project.classList.add(CLASS.PROJECT, "list-group");

    const controlBox = createProjectControlBox(container.id);
    
    container.append(descriptionTag, controlBox, project);
    
    return container;
}

const addBtnHandler = function(event){
    const projectID = event.target.getAttribute("projectID");
    const container = document.querySelector("#" + projectID);
    const controlBox = container.querySelector("." + CLASS.PROJECT_CONTROL_BOX);
    const textField = container.querySelector("." + CLASS.PROJECT_TEXT_FIELD);
    const projectList = container.querySelector("." + CLASS.PROJECT);
    
    // check empty input
    if (!textField.value){
        container.insertBefore(createWarning("Doing nothing is not quite a task, right?"), controlBox.nextSibling);
        return;
    }

    const taskID = `${projectID}-task-${projectList.childNodes.length}`;
    projectList.appendChild(createTask(textField.value, taskID));    
}

const createWarning = function(message){
    const div = document.createElement("div");
    div.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
    div.setAttribute("role", "alert");
    div.textContent = message;
    
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("data-dismiss", "alert");
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.classList.add("close");

    // close icon
    const span = document.createElement("span");
    span.setAttribute("aria-hidden", true);
    span.innerHTML = "&times;";
    
    closeBtn.appendChild(span);
    div.appendChild(closeBtn);
    return div;
}

export {createProject};