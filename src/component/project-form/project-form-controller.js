import {WarningUi} from "../warning/warning-ui";
import {ProjectDao} from "../../dao/project-dao";
import {Project} from "../../model/project";

export class ProjectFormController {

    projectDao = new ProjectDao();

    save() {
        const projectForm = document.querySelector("#project-form");
        const name = document.querySelector("#project-name-input").value;
        const description = document.querySelector("#project-description-input").value;

        if (!this.validate(projectForm, name, description)) {
            return;
        }

        const project = new Project(name, description);
        this.projectDao.save(project);

        // remove input field after successfully creating a project
        document.querySelector("#project-form").remove();
    }

    // This method is not good enough because it is having side effect
    validate(projectForm, name, description) {

        let message;
        // TODO: display multiple warnings
        if (!name) {
            message = "Project's name should not be empty!";
        } else if (!description) {
            message = "Project's description should not be empty!";
        }

        if (message) {
            const alert = projectForm.querySelector(".alert");
            // remove existing alert
            if (alert) {
                alert.remove();
            }
            projectForm.append(new WarningUi().init(message));
            return false;
        }

        return true;
    }

    cancel() {
        document
            .getElementById("project-form")
            .remove();
    }
}
