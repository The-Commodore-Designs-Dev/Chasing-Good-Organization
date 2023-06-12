import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { UiModule } from '@microfrontend/ui';
import { GuardsModule } from '@microfrontend/guards';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    GuardsModule,
    UiModule,
    TableModule,
    RouterModule.forChild(remoteRoutes)
  ],
  providers: [],
})
export class RemoteEntryModule {}
