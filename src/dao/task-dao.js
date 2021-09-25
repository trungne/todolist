export class TaskDao {

    /********** read **********/

    getById(id) {

    }

    getAll() {

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
