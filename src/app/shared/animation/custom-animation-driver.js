//import { _resolveDefaultAnimationDriver } from '@angular/platform-browser/src/browser';
import { AnimationDriver } from '@angular/platform-browser';
export function CustomAnimationDriverFactory() {
    //if (ENV === 'no-animation') {
    return AnimationDriver.NOOP;
    //}
    //return _resolveDefaultAnimationDriver();
}
//# sourceMappingURL=custom-animation-driver.js.map