import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Userdashboard } from '../../sellercarlist/userdashboard/userdashboard';  

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  scrollToNextSection() {
    const current = document.querySelector('#home');
    const next = current?.nextElementSibling;
    if (next) {
      (next as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }
  
constructor(private router: Router) {}

browseCars() {
  this.router.navigate(['/userdashboard']);
}

}
