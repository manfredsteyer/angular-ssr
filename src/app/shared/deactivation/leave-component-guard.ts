import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ComponentWithCanDeactivate } from './component-with-can-deactivate';
import { Injectable } from '@angular/core';

@Injectable()
export class LeaveComponentGuard implements CanDeactivate<ComponentWithCanDeactivate> {

    canDeactivate(component: ComponentWithCanDeactivate, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        return component.canDeactivate();

    }

}
