import * as CLASS from './classnames';

const createPagination = function(numberOfPage){
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "...");
    nav.id = "pagination";

    const ul = document.createElement("ul");
    ul.classList.add("pagination", "pagination-lg");

    for (let i = 0; i < numberOfPage; i++){
        const li = document.createElement("li");
        li.classList.add("page-item");
        
        // active first page
        if (i == 0){
            li.classList.add("active");
            const span = document.createElement("span");
            span.textContent = "1";
            span.classList.add("page-link");
            li.append(span);
        }
        ul.append(li);
    }

    nav.append(ul);
    return nav;
}

export {createPagination};