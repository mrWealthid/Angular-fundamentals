import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: '',
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
        padding-left: 10px;
      }
    `,
  ],
})
export class LoginComponent {
  userName: any;
  password: any;
  onMouseOverLogin: any;
  constructor(private authService: AuthService, private router: Router) {}

  login(formValues: any) {
    console.log(formValues);
    this.authService.loginUser(formValues);

    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
