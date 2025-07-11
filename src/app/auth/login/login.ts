import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


   constructor(private router:Router) {}

  goToDashboard() {
    this.router.navigate(['/log']);
  }
}
