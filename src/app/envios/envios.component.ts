import { Component, OnInit} from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrl: './envios.component.css'
})
export class EnviosComponent implements OnInit{

  costosDeEnvio!: Observable<{tipo: string, precio: number}[]>;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.costosDeEnvio = this.carritoService.obtenerPrecioDeEnvio();
    
  }

}
