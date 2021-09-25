import {ProjectFormUi} from "../project-form/project-form-ui";

export class ProjectMenuController {

    openCreateProjectForm() {
        document
            .getElementById("project-menu-header")
            .insertAdjacentHTML("beforeend", new ProjectFormUi().init());
    }

}
