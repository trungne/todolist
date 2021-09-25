import { removeAllChildNodes } from '../utils/utils';
import { createProjectMenuHeader } from './header';
import { ProjectItem } from './project_item';

const quickProjectID = "quick-project";

// a div that contains all projects
const createProjectList = function() {
    const div = document.createElement("div");
    div.id = "project-list";
    div.classList.add("d-flex", "flex-column", "flex-wrap", "justify-content-center", "align-items-center", "mb-3");
    return div;
}


const createQuickProject = function(){
    // accordion main div
    const div = document.createElement("div");
    div.classList.add("accordion");
    div.id = quickProjectID;

    // accordion item (can have more than 1 but for the quick project, only one is needed)
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // accordion heading
    const accordionHeading = document.createElement("h2");
    accordionHeading.classList.add("accordion-header");
    accordionHeading.id = "heading";

    // accordion button
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("accordion-button", "collapsed");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#collapseOne");
    button.setAttribute("aria-expanded", true);
    button.setAttribute("aria-controls", "collapseOne");
    button.textContent = "Quick project";

    accordionHeading.append(button);

    // accordion content
    const collapse = document.createElement("div");
    collapse.id = "collapseOne";
    collapse.classList.add("accordion-collapse", "collapse");
    collapse.setAttribute("aria-labelledby", "headingOne");
    collapse.setAttribute("data-bs-parent", quickProjectID);

    // acordion body content
    const accordionBody = document.createElement("div");
    const quickProject = new ProjectItem("", ""); // a project with no title and description
    accordionBody.append(quickProject.html);
    collapse.append(accordionBody);

    // append heading and body in accordion item
    accordionItem.append(accordionHeading, collapse);
    return accordionItem;
}

const menu = document.createElement("div");
const projectList = createProjectList();
const projects = [];

const createProjectMenu = function(){
    const header = createProjectMenuHeader();
    const quickProject = createQuickProject();
    menu.append(quickProject, header, projectList);
    return menu;
}

const displayProjectItem = function(project){
    const parent =  document.querySelector("#nav-project");

    // clear content
    removeAllChildNodes(parent);

    // show project view
    parent.append(project);
}

const returnToMenu = function(){
    const parent =  document.querySelector("#nav-project");
    removeAllChildNodes(parent);
    parent.append(menu);
}

const addProjectToProjectList = function(name, description){
    const project = new ProjectItem(name, description);
    projects.push(project);
    projectList.append(project.overview);
}

const deleteProject = function(project){
    const index = projects.findIndex(p => p.projectTitle === project.projectTitle);
    if (index !== -1){
        projects.splice(index, 1);
    }
}

export {createProjectMenu, displayProjectItem, returnToMenu, addProjectToProjectList, deleteProject};