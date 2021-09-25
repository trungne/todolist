import {TaskDao} from "../../dao/task-dao";

export class TaskController {

    taskDao = new TaskDao();

    deleteTask(taskId) {
        this.taskDao.delete(taskId);
    }

    editTextTask(event) {
        const task = event.target;
        const parent = task.parentNode;

        const form = document.createElement("input");
        form.type = "text";
        form.value = task.textContent;
        form.classList.add("form-text");
        parent.replaceChild(form, task);

        form.focus();
        form.select();

        // edit task when enter is pressed
        form.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                task.textContent = e.target.value;
                e.target.dispatchEvent(new Event("focusout"));
            }
        });

        // remove edit field when lose focus
        form.addEventListener("focusout", (e) => {
            try {
                this.replaceTask(e, task);
            } catch (error) {
                // ignore
            }

        });
    }

    replaceTask = function (e, task) {
        const parentNode = e.target.parentNode;
        parentNode.replaceChild(task, e.target);
    }

    completeTask = function (task) {
        task.status = "COMPLETE";
        // future feature: cross task from calendar
    }

}
