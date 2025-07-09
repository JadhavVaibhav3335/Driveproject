import { Routes } from '@angular/router';
import { Home } from './homepage/home/home';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { Userdashboard } from './sellercarlist/userdashboard/userdashboard';




export const routes: Routes = [

  
   
    {path:'',component:Home},
     {path:'log',component:Login},
    {path:'regi', component:Registration},
    {path:'buy', component:Userdashboard},
    {path:'sell',component:Userdashboard},
    {path:'user', component:Login}
   

];
