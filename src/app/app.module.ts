import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import {MatStepperModule, MatStep} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule}from '@angular/material/checkbox'


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';

import { RootComponent } from './root/root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    RootComponent
  ],
  providers: [],
  bootstrap: [AppComponent, MainComponent, LoginComponent, SignupComponent, NavComponent],
})
export class AppModule { }
