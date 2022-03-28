import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { PAGES_ROUTES } from './pages.routes';
import { SharedModule } from '../shared.module';
import { AppComponent } from '../app.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(PAGES_ROUTES),
        NgxMaskModule.forChild(),
    ],
    bootstrap: [AppComponent]
})
export class PagesModule { }