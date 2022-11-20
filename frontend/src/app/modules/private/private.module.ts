import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CredentialComponent } from './credential/credential.component';
import {SharedModule} from "@shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    CredentialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class PrivateModule { }
