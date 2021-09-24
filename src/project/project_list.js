import { v4 as uuidv4 } from 'uuid';
import { displayProjectItem, returnToMenu } from './project';
import { createProjectItem } from './project_item';

// a div that contains all projects
const createProjectList = function() {
    const div = document.createElement("div");
    div.id = "project-list";
    div.classList.add("d-flex", "flex-column", "flex-wrap", "justify-content-center", "align-items-center", "mb-3");
    return div;
}

const createNewProject = function(name, description){
    const div = document.createElement("div");
    div.classList.add("card", "w-50", "my-3");
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
    if (!project){
        return;
    }
    const backToMenu = document.createElement("button");
    backToMenu.classList.add("btn", "btn-secondary", "my-3");
    backToMenu.type = "button";
    backToMenu.textContent = "Back";
    backToMenu.addEventListener("click", () => {
        returnToMenu();
    })
    
    const title = project.querySelector(".card-title").textContent;
    const description = project.querySelector(".card-text").textContent;

    const projectItem = createProjectItem(title, description);
    
    const div = document.createElement("div");
    div.append(backToMenu, projectItem);
    displayProjectItem(div);
}



export {createProjectList, createNewProject};