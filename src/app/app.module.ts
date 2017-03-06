import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BASE_URL } from './app.tokens';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { PassengerModule } from './passenger/passenger.module';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { EnvService, ClientEnvService} from './shared/env/env.service';
/*
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}
*/

@NgModule({
    imports: [
        BrowserModule.withServerTransition({
            appId: 'demo-app'
        }),
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CoreModule,
        AppRouterModule,
        //    FlightBookingModule, // <-- Would prevent lazy loading
        PassengerModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        FlightHistoryComponent
    ],
    providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at' },
        { provide: EnvService, useClass: ClientEnvService }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
