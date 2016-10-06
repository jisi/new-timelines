import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from "../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  private userId = '';
  private password = '';

  constructor(private userService: UserService, private router: Router) {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/timeline-manager']);
    }
  }

  login() {
    this.userService.login(this.userId, this.password);
    this.router.navigate(['/timeline-manager']);
  }
}
