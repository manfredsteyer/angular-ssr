import { Component } from '@angular/core';

@Component({
    selector: 'flight-tooltip',
    template: `
        <div class="tooltip-bg">
            <b>Tipp:</b>
            <ng-content></ng-content>
        </div>
    `,
    styles: [`
        .tooltip-bg {
            background-color: yellow; 
            border: solid 2px darkkhaki
        }
    `]

})
export class TooltipComponent {
}
