import { NgModule } from '@angular/core';
import { LeaveComponentGuard } from '../shared/deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from '../shared/preload/custom-preloading.strategy';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    LeaveComponentGuard,
    CustomPreloadingStrategy,
  ],
  exports: []
})
export class CoreModule {
}
