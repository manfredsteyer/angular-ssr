import {
  Component, EventEmitter, Input, Output, AfterViewChecked, ChangeDetectionStrategy,
  ElementRef, NgZone
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent  {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    constructor() {
    }

    select() {
        this.selectedItemChange.emit(this.item);
    }

    blink() {
      // Vorsicht: Direkter DOM-Zugriff !!!
      /*
      this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
        }, 1000);
      });
      */
    }
}
