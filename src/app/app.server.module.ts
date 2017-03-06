import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { EnvService, ServerEnvService} from './shared/env/env.service';

@NgModule({
  imports: [
	  ServerModule,
	  AppModule
  ],
  bootstrap: [
	  AppComponent
  ],
  providers: [
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: EnvService, useClass: ServerEnvService }
  ]
})
export class AppServerModule {}
