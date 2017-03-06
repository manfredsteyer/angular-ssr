import { Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
    selector: '[flightClickWithWarning]'
})
export class FlightClickWithWarningDirective implements OnInit {

    @Input() warning: string = 'Are you sure?';
    @Output() flightClickWithWarning = new EventEmitter();

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');

        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    }

    @HostListener('click', ['$event'])
    handleClick($event): void {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    }

    /*
    @HostListener('click', ['$event', '$event.shiftKey'])
    handleClick($event, shiftKey): void {
        console.log('handleClick', $event);
        if (shiftKey || confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    }
    */

}
