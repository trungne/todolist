import { createProjectMenuHeader } from './header';
import { createProjectItem } from './project_item';
import { createProjectList } from './project_list';

const quickProjectID = "quick-project";
const createQuickProject = function(){
    const div = document.createElement("div");
    div.classList.add("accordion");
    div.id = quickProjectID;

    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionHeading = document.createElement("h2");
    accordionHeading.classList.add("accordion-header");
    accordionHeading.id = "heading";

    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("accordion-button", "collapsed");
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#collapseOne");
    button.setAttribute("aria-expanded", true);
    button.setAttribute("aria-controls", "collapseOne");
    button.textContent = "Quick project";

    accordionHeading.append(button);

    const collapse = document.createElement("div");
    collapse.id = "collapseOne";
    collapse.classList.add("accordion-collapse", "collapse");
    collapse.setAttribute("aria-labelledby", "headingOne");
    collapse.setAttribute("data-bs-parent", quickProjectID);

    const accordionBody = document.createElement("div");
    accordionBody.append(createProjectItem("", ""));
    collapse.append(accordionBody);

    accordionItem.append(accordionHeading, collapse);
    return accordionItem;
}


const createProjectMenu = function(){
    const menu = document.createElement("div");
    const header = createProjectMenuHeader();
    const projectList = createProjectList();
    const quickProject = createQuickProject();
    menu.append(quickProject, header, projectList);
    return menu;
}

const displayProjectItem = function(project){
    const parent =  document.querySelector("#nav-project");
    removeAllChildNodes(parent);
    // show project view
    parent.append(project);
}

const returnToMenu = function(){
    const parent =  document.querySelector("#nav-project");
    removeAllChildNodes(parent);
    parent.append(menu);
}

const removeAllChildNodes = function(parent){
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

export {createProjectMenu, displayProjectItem, returnToMenu};