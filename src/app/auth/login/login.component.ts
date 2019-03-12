import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import { AuthData } from '../AuthData';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.getIsAuth();
    if (this.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {}

  onLoginSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const authData: AuthData = {
      password: form.value.password,
      username: form.value.username
    };
    this.authService.login(authData);
  }
}
