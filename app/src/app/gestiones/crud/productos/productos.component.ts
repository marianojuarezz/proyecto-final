import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LamparasService } from 'src/app/servicios/lamparas-service/lamparas.service';
import { NewProductComponent } from '../new-product/new-product.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  lampara = {
    id:0,
   nombre: "",
   tipo:"",
   descripcion:"",
   precio:"",
   imagen:""
};

lamparas:any;
busqueda = "";
backup : any;
id : any;
event: any
  constructor(private lamparaService : LamparasService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.lamparaService.getLamparas().subscribe(response =>{
      this.lamparas = response;
      this.backup = response;
      
      //filtro de backup, y actualizo lamparas

    });
  }

   eliminarProd(id:any) {
    this.lamparaService.deleteLampara(id).subscribe(response =>{
      let newProducts = this.lamparas.filter((item: { id: any; }) =>{
        return item.id !== id
      })
      this.lamparas = newProducts;
      
    })
  }

  openModal(lampara:any){
  const modalRef = this.modalService.open(NewProductComponent)
  modalRef.componentInstance.lampara = lampara;
  }


  filtrar() {
    let newProducts = this.lamparas.filter((lampara: { nombre: any; }) =>{
      return lampara.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) === true
    })
    this.lamparas = newProducts;
    
  };




  handlerInput(event:any){
    if(event.target.value.length === 0){
      this.lamparas = this.backup;
    }
  }
}
 
