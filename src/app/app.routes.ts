import { Routes } from '@angular/router';
import { Home } from './homepage/home/home';
import { Login } from './auth/login/login';
import { Registration } from './auth/registration/registration';
import { Userdashboard } from './sellercarlist/userdashboard/userdashboard';
import { ResetPassword } from './auth/reset-password/reset-password';

export const routes: Routes = [

  
   
    {path:'',component:Home},
     {path:'login',component:Login},
    { path: 'registration', component: Registration },
    {path:'buy', component:Userdashboard},
    {path:'sell',component:Userdashboard},
    {path:'user', component:Login},
     {path:'resetpassword', component:ResetPassword},


   

];
