import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Userdashboard } from './userdashboard/userdashboard';
import { RouterOutlet } from '@angular/router';
// import { Display } from './display/display';




@NgModule({
  declarations: [
    Userdashboard,
    // Display
  ],
  imports: [
    CommonModule,
    RouterOutlet
]
})
export class SellercarlistModule { }
