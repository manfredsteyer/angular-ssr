import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[flightUnless]'
})
export class UnlessDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) {
    }

    @Input() set flightUnless(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
