import { Component } from '@angular/core';
import { Seller } from '../../seller';
import { FormsModule } from '@angular/forms';
import { Sellerservices } from '../../sellerservices';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-sellerform',
  imports: [FormsModule, RouterLink],
  templateUrl: './sellerform.html',
  styleUrl: './sellerform.css'
})
export class Sellerform {

  constructor(private ss: Sellerservices,  private router:Router){

  }

  savedata(s1:Seller)
{
  this.ss.one(s1).subscribe();
   window.location.reload();
     
}
    
 s1=new Seller();


}
