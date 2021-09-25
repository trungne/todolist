import { removeAllChildNodes } from '../utils/utils';
import { createProjectMenuHeader } from './header';
import { createProjectItem } from './project_item';
import { createNewProject, createProjectList } from './project_list';

const quickProjectID = "quick-project";

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
    accordionBody.append(createProjectItem("", ""));
    collapse.append(accordionBody);

    // append heading and body in accordion item
    accordionItem.append(accordionHeading, collapse);
    return accordionItem;
}

const menu = document.createElement("div");
const header = createProjectMenuHeader();
const projectList = createProjectList();
const quickProject = createQuickProject();

const createProjectMenu = function(){
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
    const project = createNewProject(name, description);
    projectList.append(project);
}



export {createProjectMenu, displayProjectItem, returnToMenu, addProjectToProjectList};