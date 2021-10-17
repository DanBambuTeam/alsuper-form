import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule} from './material.module';
import { RestpasswordComponent } from './components/restpassword/restpassword.component';
import { RestpastreqComponent } from './components/restpastreq/restpastreq.component';
import { RegisscesComponent } from './components/registro/regissces/regissces.component';
import { RegisfailedComponent } from './components/registro/regisfailed/regisfailed.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ResendverifyComponent } from './components/verify/resendverify/resendverify.component';
import { ResetpwfailedComponent } from './components/restpassword/resetpwfailed/resetpwfailed.component';
import { ResetpwscessComponent } from './components/restpassword/resetpwscess/resetpwscess.component';
import { LoginfailComponent } from './components/login/loginfail/loginfail.component';
import { LogsccesComponent } from './components/login/logscces/logscces.component';
import { BadrqstComponent } from './components/login/badrqst/badrqst.component'



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    RestpasswordComponent,
    RestpastreqComponent,
    RegisscesComponent,
    RegisfailedComponent,
    VerifyComponent,
    ResendverifyComponent,
    ResetpwfailedComponent,
    ResetpwscessComponent,

    LoginfailComponent,
     LogsccesComponent,
     BadrqstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,


  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
