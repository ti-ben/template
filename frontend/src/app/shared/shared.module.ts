import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    BreadcrumbComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  providers: [],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
