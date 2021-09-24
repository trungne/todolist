const createHome = function(){
    const div = document.createElement("h1");
    div.classList.add("text-center");
    div.textContent = "Home";
    return div;
}

export { createHome }