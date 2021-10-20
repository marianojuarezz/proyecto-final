import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  lampara = {
    id:0,
   nombre: "",
   tipo:"",
   descripcion:"",
   precio:"",
   imagen:""
};
  constructor() { }

  ngOnInit(): void {
  }
  eliminarProd() {

  };

  agregar() {

  };

  quitar() {
    
  };
}
