import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarritoService } from '../carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  items = this.carritoService.getItems();

  formularioEnvio = this.formBuilder.group({
    nombre: '',
    direccion: ''
  })

  constructor (
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
    ) {}

    onSubmit(): void {
      this.items = this.carritoService.limpiarCarrito();
      console.warn("Los datos han sido enviados", this.formularioEnvio.value),
      this.formularioEnvio.reset();
    }
}
