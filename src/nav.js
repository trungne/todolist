const content = document.createElement("div");
content.classList.add("tab-content");
content.id = "nav-tabContent";

const createNav = function(tabList){
    const nav = document.createElement("nav");
    const div = document.createElement("div");
    div.classList.add("nav", "nav-tabs", "justify-content-center");
    div.id = "nav-tab";
    div.setAttribute("role", "tablist");
    for (const tab of tabList){
        const button = createTabButton(tab.name);
        div.append(button);
        content.append(createTabContent(tab));
    }
    
    nav.append(div);
    return nav;
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

const createTabContent = function(tab){
    const div = document.createElement("div");
    div.classList.add("tab-pane", "fade");
    div.id = "nav-" + tab.name.toLowerCase();
    div.setAttribute("role", "tabpanel");
    div.setAttribute("aria-labelledby", `nav-${tab.name.toLowerCase()}-tab`);
    div.append(tab.content);
    return div;
}

export {createNav};
export {content};