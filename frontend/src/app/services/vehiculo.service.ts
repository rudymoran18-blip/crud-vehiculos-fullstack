import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class VehiculoService {
  apiUrl = 'http://localhost:3000/api/vehiculos';

  constructor(private http: HttpClient) { }


  getVehiculos():Observable<any> {
    return this.http.get(this.apiUrl);
  }


  getVehiculobyId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createVehiculo(vehiculo: any): Observable<any> {
    return this.http.post(this.apiUrl, vehiculo);
  }

  updateVehiculo(id: number, vehiculo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, vehiculo);
  }

  deleteVehiculo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
