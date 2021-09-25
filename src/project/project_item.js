import { createTask } from './task';
import { createWarning, removeAllWarnings } from '../utils/utils';
import { deleteProject, displayProjectItem, returnToMenu } from './project_menu';

class ProjectItem {
    static containerID = "project-item"
    static taskListID = "project-task-list";
    static backButton = ProjectItem.createBackButton();
    
    static createTaskList(){
        // an order list of tasks
        const taskList = document.createElement("ol");
        taskList.classList.add("list-group");
        taskList.id = ProjectItem.taskListID;
        return taskList;
    }

    static createBackButton(){
        const backToMenu = document.createElement("button");
        backToMenu.classList.add("btn", "btn-secondary", "my-3");
        backToMenu.type = "button";
        backToMenu.textContent = "Back";
        backToMenu.addEventListener("click", () => {
            returnToMenu();
        })
        return backToMenu;
    }
    
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.taskList = ProjectItem.createTaskList();
        this.overview = this.createOverview();
        this.container = this.createElement();
    }

    get projectTitle() {
        return this.title;
    }

    get html() {
        return this.container;
    }
    createElement(){
        // a div that wrap controls and project (which wraps a list of tasks)
        const div = document.createElement("div");
        div.style.height = "auto";
        div.id = ProjectItem.containerID;

        const titleTag = document.createElement("h1");
        titleTag.classList.add("display-1", "text-center");
        titleTag.textContent = this.title;

        const descriptionTag = document.createElement("blockquote");
        descriptionTag.classList.add("text-center", "blockquote");
        descriptionTag.textContent = this.description;

        const controlBox = this.createProjectControlBox();

        div.append(titleTag, descriptionTag, controlBox, this.taskList);
        
        return div;
    }

    createProjectControlBox = function(){
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
            // check empty input
            if (!form.value){
                // only add one warning
                if (!container.querySelector(".alert-warning")){
                    const warning = createWarning("Doing nothing is not quite a task, right?");
                    this.container.insertBefore(warning, controlBox.nextSibling);
                }
                return;
            }
    
            this.taskList.appendChild(createTask(form.value));
    
            // reset text field
            form.value = "";
    
            // remove warning if there is any
            removeAllWarnings(this.container);
        });
    
        controlBox.append(form, label, addBtn);
        return controlBox;
    }

    createOverview = function(){
        const div = document.createElement("div");
        div.classList.add("card", "w-50", "my-3");
        
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
    
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = this.title
        cardTitle.contentEditable = true;
    
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = this.description
        cardText.contentEditable = true;
    
        const cardButtons = document.createElement("div");
        cardButtons.classList.add("d-flex","justify-content-between");
    
        const openBtn = document.createElement("button");
        openBtn.classList.add("btn", "btn-primary");
        openBtn.textContent = "Open";
        openBtn.addEventListener("click", () => {
            this.openProject(div.id);
        })
    
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteProject(this);
            div.remove();
        })
    
        cardButtons.append(openBtn, deleteBtn)
    
        cardBody.append(cardTitle, cardText, cardButtons);
        div.append(cardBody);
        return div;
    }
    
    openProject = function(){
        const div = document.createElement("div");
        div.append(ProjectItem.backButton, this.container);
        displayProjectItem(div);
    }
}

export {ProjectItem};