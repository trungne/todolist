import {Tab} from 'bootstrap';
import {MainUi} from "./component/main/main-ui";
import {ProjectMenuUi} from "./component/project-menu/project-menu-ui";
import {ProjectDao} from "./dao/project-dao";
import {HomeController} from "./component/home/home-controller";
import {MainController} from "./component/main/main-controller";
import {ProjectFormController} from "./component/project-form/project-form-controller";
import {ProjectMenuController} from "./component/project-menu/project-menu-controller";
import {TaskController} from "./component/task/task-controller";
import {WarningController} from "./component/warning/warning-controller";
import {AboutMeController} from "./component/about-me/about-me-controller";
import {HomeUi} from "./component/home/home-ui";
import {AboutMeUi} from "./component/about-me/about-me-ui";

import ('./styles.css');
import ('./scss/app.scss');

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

// globally initialize controllers so that every ui can call methods in corresponding controller
window.aboutMeController = new AboutMeController();
window.homeController = new HomeController();
window.mainController = new MainController();
window.projectFormController = new ProjectFormController();
window.projectMenuController = new ProjectMenuController();
window.taskController = new TaskController();
window.warningController = new WarningController();

main();

function main() {
    // use window.location.pathname to implement feature redirect page
    // let page = window.location.pathname;

    let menus = initMenus();
    document.body.insertAdjacentHTML("afterbegin", new MainUi().init(menus));
    setTimeout(() => {
        navigateToTab(menus[0].id);
    })
}

function initMenus() {
    let allProjects = new ProjectDao().getAll();

    return [
        {
            id: "home", // Should use id, tab.name can be translated to Vietnamese one day (i18n)
            name: "Home",
            body: new HomeUi().init()
        },
        {
            id: "project",
            name: "Project",
            body: new ProjectMenuUi().init(allProjects)
        },
        {
            id: "aboutMe",
            name: "About Me",
            body: new AboutMeUi().init()
        }
    ];
}

function navigateToTab(tabId) {
    let tabElement = document.getElementById(`nav-${tabId}-tab`);
    let tab = new Tab(tabElement);
    tab.show();
}
