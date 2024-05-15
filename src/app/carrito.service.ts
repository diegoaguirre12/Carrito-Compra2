import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './productos';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items:  Producto[] = []; 

  constructor(private http: HttpClient) { }

  agregarAlCarrito(producto: Producto) {
    this.items.push(producto);
  }

  getItems() {
    return this.items;
  }

  limpiarCarrito() {
    this.items = [];
    return this.items;
  }

  obtenerPrecioDeEnvio() {
    return this.http.get<{tipo: string, precio: number}[]>
    ('/assets/shipping.json');
  }
}
