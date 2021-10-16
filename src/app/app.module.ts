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
import { ChekcodeComponent } from './components/chekcode/chekcode.component';
import { RestpastreqComponent } from './components/restpastreq/restpastreq.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    RestpasswordComponent,
    ChekcodeComponent,
    RestpastreqComponent
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
  entryComponents:[ChekcodeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
