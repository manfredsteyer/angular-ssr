import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[flightRepeate]'
})
export class RepeateDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set flightRepeateOf(items: any[]) {
        this.viewContainer.clear();

        let i = 0;
        for (let item of items) {
            i++;
            let context = {
                $implicit: item,
                index: i - 1,
                odd: (i % 2 === 1)
            };
            this.viewContainer
                .createEmbeddedView(
                    this.templateRef,
                    context);
        }
    }

}
