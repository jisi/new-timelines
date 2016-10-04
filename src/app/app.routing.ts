/**
 * Created by isa on 29/09/16.
 */

import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';

import {LoginComponent} from './login/login.component';
import {TimelineManagerComponent} from './timeline-manager/timeline-manager.component';


import { LoginGuardService } from './login-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'timeline-manager', component: TimelineManagerComponent, canActivate: [ LoginGuardService ] }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
