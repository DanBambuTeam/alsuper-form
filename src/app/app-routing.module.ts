import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestpasswordComponent } from './components/restpassword/restpassword.component';


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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
