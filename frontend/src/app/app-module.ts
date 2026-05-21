import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { VehiculosComponent } from './components/vehiculoComponent/vehiculos-component/vehiculos-component';
import { NavbarComponent } from './navbar/navbar-component/navbar-component';
import { FooterComponent } from './footer/footer-component/footer-component';
import { FormVehiculo } from './components/form-vehiculo/form-vehiculo';
import { HomeComponent } from './components/home-component/home-component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    App,
    VehiculosComponent,
    NavbarComponent,
    FooterComponent,
    FormVehiculo,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations(),

  ],
  bootstrap: [App]
})
export class AppModule { }
