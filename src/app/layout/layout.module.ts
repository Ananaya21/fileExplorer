import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ]
})
export class LayoutModule { }
