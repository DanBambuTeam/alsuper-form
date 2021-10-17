import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestpasswordComponent } from './components/restpassword/restpassword.component';
import { RestpastreqComponent } from './components/restpastreq/restpastreq.component';
import { VerifyComponent } from './components/verify/verify.component';


const routes: Routes = [



    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegistroComponent
    },
    {
      path: 'restpassword',
      component: RestpasswordComponent,
    },
    {
      path: 'restpastreq',
      component: RestpastreqComponent
    },
    {
      path: 'verify',
      component: VerifyComponent
    },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
