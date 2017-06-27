import { autoinject } from "aurelia-framework";

@autoinject
export class InstagramModule {

    input: string;

    constructor() {
    }

}

export class CaseValueConverter {
    toView(value: string) {
        return value && value.toUpperCase();
    }
}
