import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './shared.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    PagesModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
