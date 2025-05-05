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

  checkOutForm = this.formBuilder.group({
    nombre: '',
    direccion: ''
  })

  constructor(
    private carritoService: CarritoService,
    private formBuilder: FormBuilder
    ){}

    onSubmit(): void {
      this.items = this.carritoService.limpiarCarrito();
      console.warn('Su orden fue enviada', this.checkOutForm.value);
      this.checkOutForm.reset();
    }

}
