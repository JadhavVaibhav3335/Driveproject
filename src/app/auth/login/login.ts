import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../registration/registration';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

constructor(private router: Router) {}

register() {
  this.router.navigate(['/registration']);
}
resetPassword() {
  this.router.navigate(['/resetpassword']);
}
}
