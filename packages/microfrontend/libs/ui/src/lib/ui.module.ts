import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { ButtonComponent } from './button/button.component';
import { RemoteMenuComponent } from './remote-menu/remote-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { CopyrightFooterComponent } from './copyright-footer/copyright-footer.component';
import { InformationalFooterComponent } from './informational-footer/informational-footer.component';
import { HeaderComponent } from './header/header.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { AuthService, ServicesModule } from '@microfrontend/services'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatTabsModule,
    PanelMenuModule,
    SidebarModule,
    ButtonModule,
    ServicesModule
  ],
  declarations: [
    ButtonComponent,
    RemoteMenuComponent,
    MobileMenuComponent,
    CopyrightFooterComponent,
    InformationalFooterComponent,
    HeaderComponent,
    InformationalFooterComponent,
    ErrorMessageComponent,
    SentMessageComponent,
    SideMenuComponent,
    LoginFormComponent,
  ],
  exports: [
    ButtonComponent,
    RemoteMenuComponent,
    SideMenuComponent,
    HeaderComponent,
    InformationalFooterComponent,
    CopyrightFooterComponent,
    SentMessageComponent,
    ErrorMessageComponent,
    LoginFormComponent
  ],
  providers: [AuthService]
})
export class UiModule {}
