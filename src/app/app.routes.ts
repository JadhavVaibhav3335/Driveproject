import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Home } from './homepage/home/home';
import { Registration } from './auth/registration/registration';
import { Userdashboard } from './sellercarlist/userdashboard/userdashboard';
import { Sellerform } from './sellercarlist/sellerform/sellerform';
import { Display } from './sellercarlist/display/display';




export const routes: Routes = [

  
    {path:'log',component:Userdashboard},
    {path:'index',component:Home},
    {path:'regi', component:Registration},
    // {path:'buy', component:Userdashboard},
    // {path:'sell',component:Userdashboard},
    {path:'user', component:Login},
    {path:'sells',component:Sellerform},
    {path:'logs',component:Login},
    {path:'dis', component:Display}
   

];
