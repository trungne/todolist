import { NavigationTab } from './nav';
import ('./styles.css');
import ('./scss/app.scss');
import { Tab } from 'bootstrap';
import { createProjectMenu } from './project/project'
import { createHome } from './home/home';

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const createAboutMe = function(){
    const div = document.createElement("div");
    div.classList.add("text-center", "display-3", "d-flex", "justify-content-center", "align-items-center");
    div.style.height = "100vh";
    div.textContent = "Created by Trung Nguyen";
    return div;
}

const createMain = function(){
    new NavigationTab("Home", createHome());
    new NavigationTab("Project", createProjectMenu());
    new NavigationTab("About Me", createAboutMe());
    
    const main = document.createElement("main");
    main.append(NavigationTab.nav, NavigationTab.mainPanel);
    return main;
}

const initializeHtmlTags = function() {
    const main = createMain();
    document.body.append(main);

    let homeTab = document.querySelector('#nav-home-tab')
    let tab = new Tab(homeTab);
    tab.show();
}

initializeHtmlTags();