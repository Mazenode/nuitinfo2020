import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SpaceComponent } from './space/space.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { Space12Component } from './login/space12/space12.component';
import { LoginContainerComponent } from './login/login-container/login-container.component';
import { Space31Component } from './login/space31/space31.component';
import { SignUpFormComponent } from './login/sign-up-form/sign-up-form.component';
import { SignupComponent } from './signup/signup.component';
import { Space14Component } from './signup/space14/space14.component';
import { RegisterContainerComponent } from './signup/register-container/register-container.component';
import { Space32Component } from './signup/space32/space32.component';
import { SignUpForm1Component } from './signup/sign-up-form1/sign-up-form1.component';


@NgModule({
  declarations: [HomeComponent, SpaceComponent, LoginComponent, Space12Component, LoginContainerComponent, Space31Component, SignUpFormComponent, SignupComponent, Space14Component, RegisterContainerComponent, Space32Component, SignUpForm1Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
