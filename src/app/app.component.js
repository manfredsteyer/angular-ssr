import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from 'ng2-translate';
var AppComponent = (function () {
    function AppComponent(router, oauthService, translate) {
        this.router = router;
        this.oauthService = oauthService;
        this.translate = translate;
        this.info = 'Welt';
        this.showWaitInfo = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    };
    AppComponent.prototype.initNgTranslate = function () {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    };
    AppComponent.prototype.initRouterEvents = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.showWaitInfo = true;
            }
            if (event instanceof NavigationEnd
                || event instanceof NavigationCancel
                || event instanceof NavigationError) {
                _this.showWaitInfo = false;
            }
        });
    };
    AppComponent.prototype.initAuth = function () {
    };
    return AppComponent;
}());
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router,
        OAuthService,
        TranslateService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map