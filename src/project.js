import * as CLASS from './classnames';
import { createTask } from './task';

// like an introduction to the menu
// add more feature in the future
// ex: how to use...
const createProjectMenuHeader = function() {
    const div = document.createElement("div");
    div.id = "project-menu-header";
    div.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");
    div.style = "margin-bottom: 1em;";

    const p = document.createElement("p");
    p.classList.add("lead");
    p.textContent = "A collection of your projects";

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-primary");
    button.textContent = "Create new project";
    button.addEventListener("click", () => {
        // only create one input field when clicked
        if(!document.querySelector("#project-input-field")){
            div.append(createProjectInput());
        }
    });

    div.append(p, button);
    return div;
}

const createProjectInput = function(){
    const div = document.createElement("div");
    div.id = "project-input-field";

    // project name input field
    const divName = document.createElement("div");
    divName.classList.add("mb-3"); // add margin bottom: 3;

    const labelName = document.createElement("label");
    labelName.setAttribute("for", "project-name-input");
    labelName.classList.add("form-label");
    labelName.textContent = "Project name"

    const inputName = document.createElement("input");
    inputName.id = "project-name-input";
    inputName.type = "text";
    inputName.classList.add("form-control");

    divName.append(labelName, inputName);

    // project description input field
    const divDescription = document.createElement("div");
    divDescription.classList.add("mb-3"); // add margin bottom: 3;

    const labelDescription = document.createElement("label");
    labelDescription.classList.add("form-label");
    labelDescription.setAttribute("for", "project-description-input");
    labelDescription.textContent = "Project description"

    const inputDescription = document.createElement("textarea");
    inputDescription.classList.add("form-control");
    inputDescription.id = "project-description-input";
    inputDescription.rows = 2;

    divDescription.append(labelDescription, inputDescription);

    const addBtn = document.createElement("button");
    addBtn.classList.add("btn", "btn-primary");
    addBtn.textContent = "Add";
    addBtn.addEventListener("click", () => {
        const projectMenuHeader = document.querySelector("#project-menu-header");
        
        // TODO: only create one warning
        if (!inputName.value){
            projectMenuHeader.append(createWarning("Project's name should not be empty!"));
            return;
        }
        else if (!inputDescription.value){
            projectMenuHeader.append(createWarning("Project's description should not be empty"));
            return;
        }

        const projectList = document.querySelector("#project-list");
        projectList.append(createNewProject(inputName.value, inputDescription.value));
        div.remove();
    })

    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("btn", "btn-light");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => {
        div.remove();
    })

    const buttons = document.createElement("div");
    buttons.classList.add("d-flex","justify-content-between");
    buttons.append(addBtn, cancelBtn)
    div.append(divName, divDescription, buttons);
    return div;
}


// a div that contains all projects
const createProjectList = function() {
    const div = document.createElement("div");
    div.id = "project-list";
    div.classList.add("d-flex", "flex-row", "flex-wrap", "justify-content-center", "align-items-center");
    div.style = "gap: 1em";
    return div;
}

// the main menu that contain ProjectMenuHeader and ProjectList
const createProjectMenu = function(){
    const div = document.createElement("div");
    const header = createProjectMenuHeader();
    const projectList = createProjectList();

    div.append(header, projectList);
    return div;
}


const createNewProject = function(name, description){
    const div = document.createElement("div");
    div.classList.add("card", "w-50");
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = name
    cardTitle.contentEditable = true;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = description
    cardText.contentEditable = true;

    const cardButtons = document.createElement("div");
    cardButtons.classList.add("d-flex","justify-content-between");

    const openBtn = document.createElement("button");
    openBtn.classList.add("btn", "btn-primary");
    openBtn.textContent = "Open";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        div.remove();
    })

    cardButtons.append(openBtn, deleteBtn)

    cardBody.append(cardTitle, cardText, cardButtons);
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