import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit {
  producto: Product | undefined;

  constructor(private ruta: ActivatedRoute) {}

  ngOnInit(): void {
    const paramRuta = this.ruta.snapshot.paramMap;
    const idProducto = Number(paramRuta.get('id'));

    this.producto = products.find(producto => producto.id === idProducto);
  }

}
