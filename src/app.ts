import { Aurelia, PLATFORM } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {

    private router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        config.title = "Aurelia";
        config.map([
            { route: ["", "home"], name: "instagram", moduleId: PLATFORM.moduleName("instagram/index") },
        ]);

    }
}
