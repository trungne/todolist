import * as CLASS from '../classnames';
import { createTask } from '../task';
import { createWarning } from '../utils/utils';
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
    header.setAttribute("display", "none");
    projectList.setAttribute("display", "none");
    menu.append(project);
}


export {createProjectMenu, menu, displayProjectItem};