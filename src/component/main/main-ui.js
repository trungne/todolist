export class MainUi {

    init(menus) {
        return this.mainUi(menus);
    }

    mainUi(menus) {
        let buttonsUi = menus.map(menu => this.buttonsUi(menu)).join("");
        let bodiesUi = menus.map(menu => this.bodiesUi(menu)).join("");

        return `
            <main>
                <nav>
                    <div id="nav-tab" class="nav nav-tabs justify-content-center" role="tablist">
                        ${buttonsUi}
                    </div>
                </nav>
                <div id="nav-tabContent" class="tab-content">
                    ${bodiesUi}
                </div>
            </main>
        `;
    }

    buttonsUi(tab) {
        return `
            <button id="nav-${tab.id}-tab"
                    class="nav-link"
                    type="button"
                    role="tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-${tab.id}"
                    aria-controls="nav-${tab.id}"
            >
                ${tab.name}
            </button>
        `;
    }

    bodiesUi(menu) {
        return `
            <div id="nav-${menu.id}"
                 class="tab-pane fade"
                 role="tabpanel"
                 aria-labelledby="nav-${menu.id}-tab"
             >
                ${menu.body}
            </div>
        `;
    }
}
