import { Directive, ViewContainerRef, TemplateRef, Input, HostListener, EmbeddedViewRef, Renderer } from '@angular/core';

@Directive({
    selector: '[flightTooltip]'
})
export class TooltipDirective {

    // tslint:disable-next-line
    @Input('flightTooltip') template: TemplateRef<any>;

    private embeddedViewRef: EmbeddedViewRef<any>;

    constructor(private viewContainer: ViewContainerRef, private renderer: Renderer) {
    }

    @HostListener('mouseover', ['$event'])
    handleMouseover($event) {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);

        let nativeElement = this.embeddedViewRef.rootNodes.find(n => n.nodeType === 1);
        if (!nativeElement) {
            return;
        }

        let left = $event.target.offsetLeft + 'px';
        let top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';

        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');

    }

    @HostListener('mouseout')
    handleMouseout() {
        this.embeddedViewRef.destroy();
    }

}
