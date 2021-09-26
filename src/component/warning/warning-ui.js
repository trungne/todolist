export class WarningUi {

    init(message) {
        return this.warningUi(message);
    }

    warningUi(message) {
        return `
            <div class="alert alert-warning alert-dismissible fade show my-3" role="alert">
                ${message}
                <div type="button" class="btn-close" data-dismiss="alert" aria-label="Close" data-bs-dismiss="alert"></div>
            </div>
        `;
    }

}
