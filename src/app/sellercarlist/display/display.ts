import { Component } from '@angular/core';
import { Sellerservices } from '../../sellerservices';
import { Seller } from '../../seller';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  imports:[CommonModule],
  // standalone: false,
  templateUrl: './display.html',
  styleUrl: './display.css'
})
export class Display {

  slist:Seller[]=[];

  constructor(private ss:Sellerservices){}

  ngOnInit(){
    this.disp();
  }


   disp(){
    return this.ss.two().subscribe(data=>{this.slist=data})
   }


}
