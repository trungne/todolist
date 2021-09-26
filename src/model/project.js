export class Project {

    constructor(name, description, tasks) {
        this.id = Math.random() + "@" + Date.now();
        this.name = name;
        this.description = description;
        this.tasks = tasks;
    }

}
