import { Component } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Vehiculo } from '../../../interfaces/vehiculo.interface';
import { Router } from '@angular/router';

import { AlertService } from '../../../services/toast.service';

@Component({
  selector: 'app-vehiculos-component',
  standalone: false,
  templateUrl: './vehiculos-component.html',
  styleUrl: './vehiculos-component.css',
})
export class VehiculosComponent {

  lstVehiculos: Vehiculo[] = [];

  constructor(private vehiculoService:VehiculoService,
              private router:Router,
              private alertService: AlertService
  ) {

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getVehiculos();
  }


  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => {
        console.log(data.vehiculos);
        this.lstVehiculos = data.vehiculos;
      },
      error: (err) => {
        console.error(err.message);
      }
    });
  }


  agregar(){
    console.log('Agregar nuevo vehículo');
    this.router.navigate(['/form/0']);
  }

  editar(id:number){
    console.log('Editar vehículo', id);
    this.router.navigate(['/form', id]);
  }

  eliminar(id: number) {
  this.alertService.confirmarEliminacion()
    .then((result) => {
      if (result.isConfirmed) {
        this.vehiculoService.deleteVehiculo(id).subscribe({
          next: () => {
            this.getVehiculos();
            this.alertService.exito(
              'Eliminado',
              'Vehículo eliminado correctamente'
            );
          },
          error: (err) => {
            console.error(err);
            this.alertService.error(
              'Error',
              'No se pudo eliminar el vehículo'
            );
          }
        });
      }
    });
}

}
