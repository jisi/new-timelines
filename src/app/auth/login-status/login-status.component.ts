import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2/angularfire2';
import {Router} from '@angular/router';

import {UserService} from "../services/user.service";

@Component({
  selector: 'login-status',
  styleUrls: [ './login-status.component.scss' ],
  template: `
        <nav class="mdl-navigation login-status">
            <a *ngIf="af.auth | async" class="mdl-navigation__link" [routerLink]="['/timeline-manager']">Timeline Manager</a>
            <a *ngIf="af.auth | async" class="mdl-navigation__link" (click)="logout()">Logout</a>
            <a *ngIf="!(af.auth | async)" class="mdl-navigation__link" [routerLink]="['/login']">Login</a>
        </nav>
    `
})

export class LoginStatusComponent {

  constructor(public af: AngularFire, private userService: UserService, private router: Router) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
