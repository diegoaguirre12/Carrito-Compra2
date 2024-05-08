import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, productos } from '../productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit{
  
  producto: Producto | undefined;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit() {
    // Obterner el id que viene en la ruta
    const rutaParam = this.ruta.snapshot.paramMap;
    const productoID = Number(rutaParam.get('id'));

    // Buscar el producto con el id de productoId
    this.producto = productos.find(producto => producto.id === productoID);
  }
}
