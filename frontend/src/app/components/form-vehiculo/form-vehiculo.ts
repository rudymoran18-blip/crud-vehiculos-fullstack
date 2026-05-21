import { Component } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoResponse, Vehiculo } from '../../interfaces/vehiculo.interface';
import { NgForm } from '@angular/forms';
import { AlertService } from '../../services/toast.service';

@Component({
  selector: 'app-form-vehiculo',
  standalone: false,
  templateUrl: './form-vehiculo.html',
  styleUrl: './form-vehiculo.css',
})
export class FormVehiculo {
  id: number = 0;
  esNuevo: boolean = true;
  vehiculo: VehiculoResponse = {
    placa: '',
    marca: '',
    modelo: '',
    anio: 0,
    color: '',
    reparado: false
  };

  constructor(private vehiculoService:VehiculoService,
              private router: Router,
              private activatedRouter:ActivatedRoute,
              private AlertService: AlertService
  ) {}


  ngOnInit(): void {
      this.activatedRouter.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.esNuevo = this.id === 0;

      if (!this.esNuevo) {
        this.getVehiculo();
      }
    });
  }

  getVehiculo() {
    this.vehiculoService.getVehiculobyId(this.id).subscribe(
      (response) => {
        this.vehiculo = response.vehiculo;
        console.log(response);
      },
      (error) => {
        console.error('Error al obtener el vehículo:', error);
      }
    );
  }
onSubmit(form: NgForm) {
  if (form.invalid) {
    return;
  }

  if (this.esNuevo) {
    this.vehiculoService.createVehiculo(this.vehiculo).subscribe({
      next: (response) => {
        console.log('Vehículo creado:', response);
        this.AlertService.exito('Éxito', response.message);
        this.router.navigate(['/vehiculos']);
      },
      error: (error) => {
        console.error('Error al crear el vehículo:', error);
        // UX Mejora: Extraemos el mensaje específico del backend si existe
        const mensajeBackend = error.error?.message || 'Error al crear el vehículo';
        // Se lo pasamos a la alerta para que diga exactamente qué pasó
        this.AlertService.error('Error', mensajeBackend);
      }
    });
  } else {
    this.vehiculoService.updateVehiculo(this.id, this.vehiculo).subscribe({
      next: (response) => {
        console.log('Vehículo actualizado:', response);
        this.AlertService.exito('Éxito', response.message);
        this.router.navigate(['/vehiculos']);
      },
      error: (error) => {
        console.error('Error al actualizar el vehículo:', error);

        // Lo mismo para la edición por si intentan cambiar la placa a una existente
        const mensajeBackend = error.error?.message || 'Error al actualizar el vehículo';
        this.AlertService.error('Error', mensajeBackend);
      }
    });
  }
}
}
