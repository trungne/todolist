const createPanel = function(){
    const panel = document.createElement("div");
    panel.classList.add("tab-content");
    panel.id = "nav-tabContent";
    return panel;
}

const createNavTabs = function(){
    const div = document.createElement("div");
    div.classList.add("nav", "nav-tabs", "justify-content-center");
    div.id = "nav-tab";
    div.setAttribute("role", "tablist");
    const nav = document.createElement("nav");
    nav.append(div);
    return nav;
}

class NavigationTab {
    static nav = createNavTabs();
    static mainPanel = createPanel();

    constructor(name, content){
        this.name = name;
        this.normalizedName = name.toLowerCase().replaceAll(/\s/g,"-");
        this.content = content;
    
        const button = this.createTabButton();
        const panel = this.createTabPanel();
        const navTabs = NavigationTab.nav.querySelector(".nav-tabs");
        navTabs.append(button);
        NavigationTab.mainPanel.append(panel);
    }

    createTabButton(){
        const button = document.createElement("button");
        button.classList.add("nav-link")
        button.id = "nav-" + this.normalizedName + "-tab";
        button.type = "button";
        button.setAttribute("role", "tab");
        button.setAttribute("data-bs-toggle", "tab");
        button.setAttribute("data-bs-target", "#nav-" + this.normalizedName)
        button.setAttribute("aria-controls", "nav-" + this.normalizedName);
        button.textContent = this.name;
        return button;
    }

    createTabPanel(){
        const div = document.createElement("div");
        div.classList.add("tab-pane", "fade");
        div.id = "nav-" + this.normalizedName;
        div.setAttribute("role", "tabpanel");
        div.setAttribute("aria-labelledby", `nav-${this.normalizedName}-tab`);
        div.append(this.content);
        return div;
    }
}

export {NavigationTab};
