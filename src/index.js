import { createNavTabs, createTabButton, createTabPanel } from './nav';
import ('./styles.css');
import ('./scss/app.scss');
import { Tab } from 'bootstrap';

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const { createProjectMenu } = require('./project/project');

const createHome = function(){
    const div = document.createElement("div");
    div.textContent = "Home";
    return div;
}

const createAboutUs = function(){
    const div = document.createElement("div");
    div.textContent = "About us";
    return div;
}

const createMain = function(){
    const nav = document.createElement("nav");
    const tabs = createNavTabs();

    const homeButton = createTabButton("Home");
    const homeTabPanel = createTabPanel("Home", createHome());

    const projectButton = createTabButton("Project");
    const projectTabPanel = createTabPanel("Project", createProjectMenu());

    const aboutButton = createTabButton("About");
    const aboutTabPanel = createTabPanel("About", createAboutUs());

    tabs.append(homeButton, projectButton, aboutButton);
    nav.append(tabs)

    const content = document.createElement("div");
    content.classList.add("tab-content");
    content.id = "nav-tabContent";

    content.append(homeTabPanel, projectTabPanel, aboutTabPanel);

    const main = document.createElement("main");
    main.append(nav, content);
    return main;
}
const initializeHtmlTags = function() {

    // append all tags in body in main tag
    const main = createMain();
    document.body.append(main);

    let homeTab = document.querySelector('#nav-home-tab')
    let tab = new Tab(homeTab);
    tab.show()
}


initializeHtmlTags();