import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registration } from '../auth/registration/registration';
import { Login } from './login/login';


@NgModule({
  declarations: [
    Registration,
    Login
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
