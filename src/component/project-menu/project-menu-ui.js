import {Project} from "../../model/project";
import {ProjectFormUi} from "../project-form/project-form-ui";

export class ProjectMenuUi {

    projectFormUi = new ProjectFormUi();

    quickProjectID = "quick-project";

    init(projects) {
        let quickProjects = [
            new Project()
        ];
        return this.projectMenuUi(quickProjects, projects);
    }

    projectMenuUi(quickProjects, projects) {
        const quickProjectUi = this.quickProjectUi(quickProjects);
        const projectMenuHeaderUi = this.projectMenuHeaderUi();
        const projectListUi = this.projectListUi(projects);

        return `
            <div>
                ${quickProjectUi}
                ${projectMenuHeaderUi}
                ${projectListUi}
            </div>
        `;
    }

    quickProjectUi(quickProjects) {
        let projectFormUis = quickProjects
            .map(project => this.projectFormUi.init(project))
            .join("");

        return `
            <div class="accordion-item">
                <h2 id="heading" class="accordion-header">
                    <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Quick project
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="${this.quickProjectID}">
                    <div>
                        ${projectFormUis}
                    </div>
                </div>
            </div>
        `;
    }

    projectMenuHeaderUi() {
        return `
            <div id="project-menu-header" class="d-flex flex-column justify-content-center align-items-center my-3">
                <button type="button" class="btn btn-primary" onclick="projectMenuController.openCreateProjectForm()">
                    New project
                </button>
            </div>
        `;
    }

    projectListUi(projects) {
        let projectFormUis = projects
            .map(project => this.projectFormUi.init(project))
            .join("");

        return `
            <div id="project-list" class="d-flex flex-column flex-wrap justify-content-center align-items-center mb-3">
                ${projectFormUis}
            </div>
        `;
    }

}
