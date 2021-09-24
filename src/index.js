import { NavigationTab } from './nav';
import ('./styles.css');
import ('./scss/app.scss');
import { Tab } from 'bootstrap';
import { createProjectMenu } from './project/project'
import { createHome } from './home/home';

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

const createAboutUs = function(){
    const div = document.createElement("div");
    div.textContent = "About us";
    return div;
}

const createMain = function(){
    new NavigationTab("Home", createHome());
    new NavigationTab("Project", createProjectMenu());
    new NavigationTab("About Us", createAboutUs());
    
    const main = document.createElement("main");
    main.append(NavigationTab.nav, NavigationTab.mainPanel);
    return main;
}

const initializeHtmlTags = function() {
    const main = createMain();
    document.body.append(main);

    let homeTab = document.querySelector('#nav-home-tab')
    console.log(homeTab);
    let tab = new Tab(homeTab);
    tab.show();
}

initializeHtmlTags();