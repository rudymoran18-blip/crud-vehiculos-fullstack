import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './components/vehiculoComponent/vehiculos-component/vehiculos-component';
import { FormVehiculo } from './components/form-vehiculo/form-vehiculo';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vehiculos' },
  { path: 'home', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'form/:id', component: FormVehiculo },
  { path: '**', redirectTo: 'vehiculos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
