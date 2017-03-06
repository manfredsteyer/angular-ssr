import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { OAuthService } from 'angular-oauth2-oidc';
var FlightService = (function () {
    function FlightService(oauthService, http, baseUrl) {
        this.oauthService = oauthService;
        this.http = http;
        this.baseUrl = baseUrl;
        this.flights = [];
    }
    FlightService.prototype.delay = function () {
        var ONE_MINUTE = 1000 * 60;
        var firstFlight = this.flights[0];
        var oldDate = new Date(firstFlight.date);
        oldDate.setTime(oldDate.getTime() + ONE_MINUTE * 15);
        firstFlight.date = oldDate.toISOString();
        /*
        let newDate: Date = new Date(oldDate.getTime() + 1000 * 60 * 15);
        let newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
        let newFlights: Flight[] = [ newFlight, ...oldFlights.slice(1) ];
  
        this.flights = newFlights;
        */
    };
    FlightService.prototype.findById = function (id) {
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        var url = this.baseUrl + '/api/flight';
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
    FlightService.prototype.find = function (from, to) {
        var _this = this;
        // let url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        var url = '/data/flights.json';
        var headers = new Headers();
        headers.set('Accept', 'text/json');
        headers.set('Authorization', 'Bearer ' + this.oauthService.getAccessToken());
        var search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);
        this
            .http
            .get(url, { headers: headers, search: search })
            .map(function (resp) { return resp.json(); })
            .subscribe(function (flights) {
            _this.flights = flights;
        }, function (err) {
            console.warn(err);
        });
    };
    return FlightService;
}());
FlightService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__param(2, Inject(BASE_URL)),
    tslib_1.__metadata("design:paramtypes", [OAuthService,
        Http, String])
], FlightService);
export { FlightService };
//# sourceMappingURL=flight.service.js.map