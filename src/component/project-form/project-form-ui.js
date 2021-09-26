export class ProjectFormUi {

    init(project) {
        return this.projectFormUi(project);
    }

    // we can re-use this form for project's detail page
    projectFormUi(project) {
        return `
            <div id="project-form" class="p-3 my-3 border w-75">
                <div class="mb-3">
                    <label for="project-name-input" class="form-label">Project name</label>
                    <input id="project-name-input" type="text" autocomplete="off" class="form-control" value="${project ? project.name : ''}"/>
                </div>
                <div class="mb-3">
                    <label for="project-description-input" class="form-label">Project description</label>
                    <textarea id="project-description-input" rows="2" class="form-control">${project ? project.description : ""}</textarea>
                </div>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" onclick="projectFormController.save()">Save</button>
                    <button class="btn light" onclick="projectFormController.cancel()">Cancel</button>
                </div>
            </div>
        `;
    }

}
