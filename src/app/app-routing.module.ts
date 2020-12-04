import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from "./shared/guard/auth.guard";
import { FormComponent } from './main/form/form.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'Main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) , canActivate: [AuthGuard] },
  { path: 'register-user', component: SignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: 'rapport', component: FormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
