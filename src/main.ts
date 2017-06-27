import "./styles/main.scss";

import * as Bluebird from "bluebird";

import { Aurelia, PLATFORM } from "aurelia-framework";

Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia: Aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName("app"));
}
