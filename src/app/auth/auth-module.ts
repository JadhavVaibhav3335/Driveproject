import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registration } from '../auth/registration/registration';
import { Login } from './login/login';
import { ResetPassword } from './reset-password/reset-password';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    Registration,
    Login,
  
  ],
  imports: [
    CommonModule,
    RouterLink
    
  ]
})
export class AuthModule { }
