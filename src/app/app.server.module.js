"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_tokens_1 = require("./app.tokens");
var shared_module_1 = require("./shared/shared.module");
var app_routes_1 = require("./app.routes");
var home_component_1 = require("./home/home.component");
var flight_history_component_1 = require("./flight-history/flight-history.component");
var ng2_translate_1 = require("ng2-translate");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var passenger_module_1 = require("./passenger/passenger.module");
var core_module_1 = require("./core/core.module");
var angular2_universal_1 = require("angular2-universal");
function createLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, './i18n', '.json');
}
exports.createLoader = createLoader;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            shared_module_1.SharedModule,
            core_module_1.CoreModule,
            app_routes_1.AppRouterModule,
            angular_oauth2_oidc_1.OAuthModule.forRoot(),
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: createLoader,
                deps: [http_1.Http]
            }),
            // FlightBookingModule, // <-- Would prevent lazy loading
            passenger_module_1.PassengerModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            flight_history_component_1.FlightHistoryComponent
        ],
        providers: [
            { provide: app_tokens_1.BASE_URL, useValue: 'http://www.angular.at' }
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
