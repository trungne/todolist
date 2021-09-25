export class WarningController {

    removeAllWarnings(parent) {
        const warnings = (parent ? parent : document).querySelectorAll(".alert");

        if (!warnings) {
            return;
        }

        for (const warning of warnings) {
            warning.remove();
        }
    }

}
