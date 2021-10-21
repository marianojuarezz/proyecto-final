import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckOutComponent } from '../check-out/check-out.component';

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
  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }
  eliminarProd() {

  };

  agregar() {

  };

  quitar() {
    
  };

  openModal() {
    this.modalService.open(CheckOutComponent)
  }
}
