import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { OAuthService } from 'angular-oauth2-oidc';
var PassengerService = (function () {
    function PassengerService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.passengers = [];
    }
    PassengerService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passenger.json';
        var url = this.baseUrl + '/api/passenger';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
        search.set('id', id);
        return this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); });
    };
    PassengerService.prototype.find = function (name) {
        var _this = this;
        var url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
        search.set('name', name);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (passengers) {
            _this.passengers = passengers;
        }, function (err) {
            console.warn(err);
        });
    };
    return PassengerService;
}());
PassengerService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(2, Inject(BASE_URL)),
    tslib_1.__metadata("design:paramtypes", [OAuthService,
        Http, String])
], PassengerService);
export { PassengerService };
//# sourceMappingURL=passenger.service.js.map