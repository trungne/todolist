import 'bootstrap';
import ('./styles.css');
import ('./scss/app.scss');


const { createProject } = require('./project');
const { createPagination } = require('./pagination');
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
    const project = createProject("project-1", "Test project");
    const pagination = createPagination(1);
    // append all tags in body in main tag
    const main = document.createElement("main");
    main.append(title, project);
    document.body.append(main, pagination);    
}


initializeHtmlTags();