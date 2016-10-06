import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";

const AuthRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(AuthRoutes);
