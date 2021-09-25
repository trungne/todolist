export class Task{

    constructor(description, projectId) {
        this.id = Math.random() + "@" + Date.now();
        this.description = description;
        this.projectId = projectId;
    }

}
