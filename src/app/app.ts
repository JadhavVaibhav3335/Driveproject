import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sellerform } from "./sellercarlist/sellerform/sellerform";
import { HomepageModule } from './homepage/homepage-module';
import { AuthModule } from './auth/auth-module';



@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, RouterLink, HomepageModule, AuthModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App {

  

}
