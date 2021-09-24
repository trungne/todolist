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

export {createWarning}