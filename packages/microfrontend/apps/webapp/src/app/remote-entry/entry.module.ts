import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { UiModule } from '@microfrontend/ui';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { HomeComponent } from '../pages/home/home.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [RemoteEntryComponent, HomeComponent],
    providers: [],
    imports: [
        CommonModule,
        LayoutModule,
        MatCardModule, 
        UiModule, 
        RouterModule.forChild(remoteRoutes)
    ]
})
export class RemoteEntryModule {}
