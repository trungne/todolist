const content = document.createElement("div");
content.classList.add("tab-content");
content.id = "nav-tabContent";

const createNavTabs = function(){
    const div = document.createElement("div");
    div.classList.add("nav", "nav-tabs", "justify-content-center");
    div.id = "nav-tab";
    div.setAttribute("role", "tablist");

    return div;
}

const createTabButton = function(name){
    const button = document.createElement("button");
    button.classList.add("nav-link")
    button.id = "nav-" + name.toLowerCase() + "-tab";
    button.type = "button";
    button.setAttribute("role", "tab");

    button.setAttribute("data-bs-toggle", "tab");
    button.setAttribute("data-bs-target", "#nav-" + name.toLowerCase())
    button.setAttribute("aria-controls", "nav-" + name.toLowerCase());
    button.textContent = name;
    return button;
}

const createTabPanel = function(name, element){
    const div = document.createElement("div");
    div.classList.add("tab-pane", "fade");
    div.id = "nav-" + name.toLowerCase();
    div.setAttribute("role", "tabpanel");
    div.setAttribute("aria-labelledby", `nav-${name.toLowerCase()}-tab`);

    div.append(element);
    return div;
}

export {createNavTabs, createTabButton, createTabPanel};
export {content};