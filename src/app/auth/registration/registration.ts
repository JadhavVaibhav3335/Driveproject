import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration{
  constructor(private router: Router) {}
  login() {
    this.router.navigate(['/login']);
  }
}
