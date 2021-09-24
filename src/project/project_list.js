import { v4 as uuidv4 } from 'uuid';
import { displayProjectItem } from './project';
import * as CLASS from '../classnames';
import { createTask } from '../task';

// a div that contains all projects
const createProjectList = function() {
    const div = document.createElement("div");
    div.id = "project-list";
    div.classList.add("d-flex", "flex-row", "flex-wrap", "justify-content-center", "align-items-center");
    div.style = "gap: 1em";
    return div;
}


const createNewProject = function(name, description){
    const div = document.createElement("div");
    div.classList.add("card", "w-50");
    div.id = "project-"+uuidv4();
    
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
    openBtn.addEventListener("click", () => {
        openProject(div.id);
    })


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

const openProject = function(id){
    const project = document.querySelector("#" + id);
    console.log("#" + id);
    console.log(project);
    if (!project){
        return;
    }

    const title = project.querySelector(".card-title").textContent;
    const description = project.querySelector(".card-text").textContent;
    displayProjectItem(createProject(title, description));
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

const createProject = function(title, description){
    // a div that wrap controls and project (which wraps a list of tasks)
    const container = document.createElement("div");
    container.classList.add(CLASS.PROJECT_CONTAINER);

    const titleTag = document.createElement("h1");
    titleTag.classList.add("display-1");
    titleTag.textContent = title;

    const descriptionTag = document.createElement("h2");
    descriptionTag.classList.add(CLASS.PROJECT_DESCRIPTION);
    descriptionTag.textContent = description;
    // descriptionTag.addEventListener("mouseenter", addEditBtn);
    // descriptionTag.addEventListener("mouseleave", removeEditBtn);
    
    // descriptionTag.title = "Click to edit";
    // descriptionTag.setAttribute("contenteditable", true)

    // an order list of tasks
    const taskList = document.createElement("ol");
    taskList.classList.add(CLASS.TASK_LIST, "list-group");

    const controlBox = createProjectControlBox(container.id);
    container.append(titleTag, descriptionTag, controlBox, taskList);
    
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

export {createProjectList, createNewProject};