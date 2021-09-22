import { content, createNav } from './nav';
import ('./styles.css');
import ('./scss/app.scss');

import { Tab } from 'bootstrap';

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const { createProject } = require('./project');

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

const initializeHtmlTags = function() {
    const tabList = [
        {name: "Home", content: createHome(), default: true},
        {name: "Projects", content: createProject("Test project")},
        {name: "About", content: createAboutUs()}
    ]

    const navBar = createNav(tabList);
    
    // append all tags in body in main tag
    const main = document.createElement("main");
    main.append(navBar, content);
    document.body.append(main);


    let homeTab = document.querySelector('#nav-home-tab')
    let tab = new Tab(homeTab);
    tab.show()
}


initializeHtmlTags();