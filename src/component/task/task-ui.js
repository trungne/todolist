export class TaskUi {

    init(task) {
        return this.taskUi(task);
    }

    taskUi(task) {
        return `
            <li class="list-group-item">
                <div class="d-flex justify-content-between">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input"/>
                        <label onclick="taskController.editTextTask()">${task.description}</label>
                    </div>
                    <button type="submit" class="btn btn-danger btn-sm" onclick="taskController.deleteTask(${task.id})">
                        &times;
                    </button>
                </div>
            </li>
        `;
    }

}
