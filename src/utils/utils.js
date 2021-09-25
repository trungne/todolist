const createWarning = function(message){
    const div = document.createElement("div");
    div.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show", "my-3");
    div.setAttribute("role", "alert");
    div.textContent = message;
    
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("data-dismiss", "alert");
    closeBtn.setAttribute("aria-label", "Close");
    closeBtn.setAttribute("data-bs-dismiss", "alert");
    closeBtn.classList.add("btn-close");

    // close icon
    div.appendChild(closeBtn);
    return div;
}

const removeAllWarnings = function(parent){
    const warnings = parent.querySelectorAll(".alert");
    if(!warnings){
        return;
    }

    for (const warning of warnings){
        warning.remove();
    }
}

const removeAllChildNodes = function(parent){
    while (parent.firstChild) {
        parent.firstChild.remove()
    }
}

export {createWarning, removeAllWarnings, removeAllChildNodes}