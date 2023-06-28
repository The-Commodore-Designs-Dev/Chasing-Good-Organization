import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';
import { AppConfig } from './app.config'

function initConfig (config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    PagesModule,
    SharedModule,
  ],
  providers: [
    AppConfig,
    { 
      provide: APP_INITIALIZER,
      multi: true, 
      useFactory: initConfig, 
      deps: [AppConfig]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const app = createCustomElement(AppComponent, {injector});
    customElements.define('app-root-website', app);
  }
}
