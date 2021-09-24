import * as CLASS from '../classnames';
import { createProjectMenuHeader } from './header';
import { createProjectList } from './project_list';

const menu = document.createElement("div");
const header = createProjectMenuHeader();
const projectList = createProjectList();
menu.append(header, projectList);
// the main menu that contain ProjectMenuHeader and ProjectList
const createProjectMenu = function(){
    return menu;
}

const displayProjectItem = function(project){
    const parent = menu.parentNode;
    removeAllChildNodes(parent);

    // show project view
    parent.append(project);
}

const returnToMenu = function(){

}

const removeAllChildNodes = function(parent){
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

export {createProjectMenu, menu, displayProjectItem};