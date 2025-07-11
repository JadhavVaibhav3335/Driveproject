import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userdashboard',
  standalone: false,
  templateUrl: './userdashboard.html',
  styleUrl: './userdashboard.css'
})
export class Userdashboard {
 constructor(private router:Router) {}




  goToBuy() {
    this.router.navigate(['/dis']);
  }

  goToSell(){
   this.router.navigate(['/sells'])

  }


}
