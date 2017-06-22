import { Aurelia, PLATFORM } from 'aurelia-framework';

import './styles/main.scss';

export function configure(aurelia: Aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}