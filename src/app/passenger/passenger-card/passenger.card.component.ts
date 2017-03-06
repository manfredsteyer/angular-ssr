import { Component, EventEmitter, Input, Output, AnimationTransitionEvent } from '@angular/core';
import { Passenger } from '../../entities/passenger';

@Component({
    selector: 'passenger-card',
    templateUrl: './passenger-card.component.html'
})
export class PassengerCardComponent {

    @Input() item: Passenger;
    @Input() selectedItem: Passenger;
    @Output() selectedItemChange = new EventEmitter<Passenger>();

    isSelected() {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    }

    select() {
        this.selectedItemChange.emit(this.item);
    }
}
