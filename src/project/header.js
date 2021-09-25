import { createWarning } from "../utils/utils";
import { createNewProject } from "./project_list";

// like an introduction to the menu
// add more feature in the future
// ex: how to use...
const createProjectMenuHeader = function() {
    const div = document.createElement("div");
    div.id = "project-menu-header";
    div.classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center", "my-3");

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("btn", "btn-primary");
    button.textContent = "New project";
    button.addEventListener("click", () => {
        // only create one input field when clicked
        if(!document.querySelector("#project-input-field")){
            div.append(createProjectInput());
        }
    });

    div.append(button);
    return div;
}

const createProjectInput = function(){
    const div = document.createElement("div");
    div.id = "project-input-field";
    div.classList.add("px-3","py-3", "my-3", "border", "w-75");

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
    inputName.autocomplete = "off";
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
        let warningMessage;
        // TODO: only create one warning
        if (!inputName.value){
            warningMessage = "Project's name should not be empty!";
        }
        else if (!inputDescription.value){
            warningMessage = "Project's description should not be empty";
        }

        if (warningMessage){
            const alert = div.querySelector(".alert");
            // remove existing alert
            if (alert){
                alert.remove();
            }
            div.append(createWarning(warningMessage));
            return;
        }

        const projectList = document.querySelector("#project-list");
        projectList.append(createNewProject(inputName.value, inputDescription.value));

        // remove input field after successfully creating a project
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

export {createProjectMenuHeader};