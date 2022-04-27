import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';

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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const app = createCustomElement(AppComponent, {injector});
    customElements.define('app-root-website', app);
  }
}
