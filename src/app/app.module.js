import * as tslib_1 from "tslib";
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BASE_URL } from './app.tokens';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app.routes';
import { HomeComponent } from './home/home.component';
import { FlightHistoryComponent } from './flight-history/flight-history.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { OAuthModule } from 'angular-oauth2-oidc';
import { PassengerModule } from './passenger/passenger.module';
import { CoreModule } from './core/core.module';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
if ('serviceWorker' in navigator) {
    var registration = runtime.register();
}
export function createLoader(http) {
    return new TranslateStaticLoader(http, './i18n', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            CoreModule,
            AppRouterModule,
            OAuthModule.forRoot(),
            TranslateModule.forRoot({
                provide: TranslateLoader,
                useFactory: createLoader,
                deps: [Http]
            }),
            //    FlightBookingModule, // <-- Would prevent lazy loading
            PassengerModule
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            FlightHistoryComponent
        ],
        providers: [
            { provide: BASE_URL, useValue: 'http://www.angular.at' }
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map