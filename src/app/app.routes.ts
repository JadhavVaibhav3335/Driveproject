import { Routes } from '@angular/router';

import { Login } from './auth/login/login';
import { Home } from './homepage/home/home';
import { Registration } from './auth/registration/registration';
import { Userdashboard } from './sellercarlist/userdashboard/userdashboard';




export const routes: Routes = [

  
    {path:'log',component:Login},
    {path:'index',component:Home},
    {path:'regi', component:Registration},
    {path:'buy', component:Userdashboard},
    {path:'sell',component:Userdashboard},
    {path:'user', component:Login}
   

];
