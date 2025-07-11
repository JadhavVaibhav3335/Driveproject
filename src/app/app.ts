import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sellerform } from "./sellercarlist/sellerform/sellerform";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink, Sellerform],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App {

  

}
