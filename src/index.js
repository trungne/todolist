import 'bootstrap';
import ('./styles.css');
import ('./scss/app.scss');


const { createProject } = require('./project');
const createHeader = function() {
    const title = document.createElement("div");
    title.classList.add("header", "text-primary")

    const titleText = document.createElement("h1");
    titleText.textContent = "To-do List";

    title.appendChild(titleText);
    return title;
}

const initializeHtmlTags = function() {
    const title = createHeader();   
    const addingTaskDiv = createProject("project-1", "Test project");
    // append all tags in body in main tag
    const main = document.createElement("main");
    main.appendChild(title);
    main.appendChild(addingTaskDiv);
    document.body.appendChild(main);    
}


initializeHtmlTags();