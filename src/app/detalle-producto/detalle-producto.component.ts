import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {
  producto: Product | undefined;

  constructor(
    private ruta: ActivatedRoute,
    private carritoService: CarritoService
    ) {}

  ngOnInit(): void {
    const paramRuta = this.ruta.snapshot.paramMap;
    const idProducto = Number(paramRuta.get('id'));

    this.producto = products.find(producto => producto.id === idProducto);
  }

  agregarAlCarrito(producto: Product) {
    this.carritoService.agregarAlCarrito(producto);
    window.alert('El producto se ha agregado al carrito!');
  }

}
