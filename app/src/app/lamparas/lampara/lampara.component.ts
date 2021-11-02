import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/componentes/toast/toast-service.service';
import { DetalleLamparaComponent } from '../detalle-lampara/detalle-lampara.component';

@Component({
  selector: 'app-lampara',
  templateUrl: './lampara.component.html',
  styleUrls: ['./lampara.component.css']
})
export class LamparaComponent implements OnInit {
@Input () lampara:any
producto = {
      id: 0,
      nombre: "",
      tipo: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      cantidad : 0
}

qty = 0;
  constructor(
    private modalService : NgbModal,
     private toastService: ToastService
    ) { }

  ngOnInit(): void {
  
  }

addCart(lampara:any) {
  this.producto.id = lampara.id;
  this.producto.nombre = lampara.nombre;
  this.producto.tipo = lampara.tipo;
  this.producto.descripcion = lampara.descripcion;
  this.producto.precio = lampara.precio;
  this.producto.imagen = lampara.imagen;
  this.producto.cantidad = this.qty;
  sessionStorage.setItem("producto"+lampara.id,JSON.stringify(this.producto))
  this.toastService.show('Se agrego un producto al carrito', { classname: 'bg-success text-light', delay: 5000 });

  
}


openModal() {
  const modalRef = this.modalService.open(DetalleLamparaComponent)
  modalRef.componentInstance.lampara = this.lampara
 
};


 

}
