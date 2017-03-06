import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidatorDirective } from './validation/city.validator';
import { RoundTripDirective } from './validation/roundtrip.validator';
import { AsyncCityValidatorDirective } from './validation/async-city.validator';
import { DateComponent } from './date/date.component';
import { LeaveComponentGuard } from './deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from './preload/custom-preloading.strategy';
import { E2eLocatorDirective } from './e2e-locator/e2e-locator.directive';
import { FlightClickWithWarningDirective } from './warning/flight-click-with-warning.directive';
import { RepeateDirective } from './structural/repeate.directive';
import { UnlessDirective } from './structural/unless.directive';
import { TooltipDirective } from './structural/tooltip.directive';
import { TooltipComponent } from './structural/tooltip.component';
import { Tooltip2Directive } from './structural/tooltip2.directive';
import { ValidationErrorsComponent } from './validation/validation-errors.component';
import { DateControlComponent } from './date/date.control';
import { DateValueAccessorDirective } from './date/date-value-accessor';


@NgModule({
    imports: [
        FormsModule, // [(ngModel)]
        CommonModule // ngFor, ngIf, ngStyle, ngClass, date, json
    ],
    declarations: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent,
        DateControlComponent,
        DateValueAccessorDirective,
        E2eLocatorDirective,
        FlightClickWithWarningDirective,
        RepeateDirective,
        UnlessDirective,
        TooltipDirective,
        TooltipComponent,
        Tooltip2Directive,
        ValidationErrorsComponent
    ],
    exports: [
        CityPipe,
        CityValidatorDirective,
        AsyncCityValidatorDirective,
        RoundTripDirective,
        DateComponent,
        DateControlComponent,
        DateValueAccessorDirective,
        E2eLocatorDirective,
        FlightClickWithWarningDirective,
        RepeateDirective,
        UnlessDirective,
        TooltipDirective,
        TooltipComponent,
        Tooltip2Directive,
        ValidationErrorsComponent
    ],
    entryComponents: [
        TooltipComponent
    ]
})
export class SharedModule {
}
