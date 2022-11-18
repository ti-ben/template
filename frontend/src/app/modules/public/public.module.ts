import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import {SigninComponent} from "./signin/signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [PublicRoutingModule, CommonModule, ReactiveFormsModule],
  providers: []
})
export class PublicModule {
}
