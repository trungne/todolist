import {Project} from "../model/project";

export class ProjectDao {
// Communication with database happens here (in our context, "database" is browser's local storage)
// Reference: https://www.baeldung.com/java-dao-pattern
// TODO: write code for this class

    /********** read **********/

    getById(id) {

    }

    getAll() {
        return [
            new Project("Project 1", "Project 1 description"),
            new Project("Project 2", "Project 2 description"),
            new Project("Project 3", "Project 3 description"),
            new Project("Project 4", "Project 4 description")
        ]
    }

    /********** create / update **********/

    save(model) {
        if (model.id) {
            // update(task);
        } else {
            // create(task);
        }
    }

    saveAll(list) {
        list.forEach(item => this.save(item));
    }

    /********** remove **********/

    delete(id) {

    }

    deleteAll(list) {
        list.forEach(item => this.delete(item));
    }

}
