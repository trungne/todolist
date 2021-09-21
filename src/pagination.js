import * as CLASS from './classnames';

const createPagination = function(numberOfPage){
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "...");

    const ul = document.createElement("ul");
    ul.classList.add("pagination", "pagination-lg");

    for (let i = 0; i < numberOfPage; i++){
        const li = document.createElement("li");
        li.classList.add("page-item");
        
        // active first page
        if (i == 0){
            li.classList.add("active");
        }
    }

}