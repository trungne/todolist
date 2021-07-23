import ('./styles.css');

addTask = function(taskInputField, taskField){
    if (taskInputField.value){
        let confirmed = true;
        for (let task of taskField.childNodes){
            if (taskInputField.value === task.textContent){
                confirmed = confirm(`It seems that ${task.textContent} has already been added. You still want to add it?`);
            }
        }

        if (confirmed){
            const div = document.createElement("div");
            div.textContent = taskInputField.value;
            taskField.appendChild(div);
        }
    }
    else{
        alert("Doing nothing is not quite a task, right?")
    }
}

initializeHtmlTags = function(){
    // header text
    const title = document.createElement("div");
    const titleText = document.createElement("h1");
    title.classList.add("header")
    titleText.textContent = "To-do List";
    title.appendChild(titleText);

    // div for adding task
    const addingTaskDiv = document.createElement("div");

    const form = document.createElement("form");
    form.onsubmit = () => {return false;}

    // input text for adding task
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Enter your task";

    const addTaskBtn = document.createElement("input");
    addTaskBtn.type = "submit";
    addTaskBtn.value = "Add";

    form.appendChild(taskInput);
    form.appendChild(addTaskBtn);

    const tasks = document.createElement("div");
    addingTaskDiv.appendChild(form);
    addingTaskDiv.appendChild(tasks);

    addTaskBtn.addEventListener("click", () => {
        addTask(taskInput, tasks);
    });

    // append all tags in body in main tag
    const main = document.createElement("main");
    main.appendChild(title);
    main.appendChild(addingTaskDiv);

    document.body.appendChild(main);    
}


initializeHtmlTags();