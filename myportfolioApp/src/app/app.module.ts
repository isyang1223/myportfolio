import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { ScrollToModule } from 'ng2-scroll-to-el';

import { NgsRevealModule } from 'ng-scrollreveal';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PetshelterComponent } from './petshelter/petshelter.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LinkmeComponent } from './linkme/linkme.component';
import { SatsumaComponent } from './satsuma/satsuma.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PetshelterComponent,
    UserdashboardComponent,
    LinkmeComponent,
    SatsumaComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScrollToModule.forRoot(),
    NgsRevealModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}

