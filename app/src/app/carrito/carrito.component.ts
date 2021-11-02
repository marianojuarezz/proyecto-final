import { LazyRoute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckOutComponent } from '../check-out/check-out.component';
import { LamparasService } from '../servicios/lamparas-service/lamparas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

products : string[] = [];
cartProduct : any = [];
total = 0;


  constructor(private modalService : NgbModal, private productoService : LamparasService) { }

  ngOnInit(): void {
    this.products = Object.keys(sessionStorage);
    this.products.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let lamp = JSON.parse(item);
         this.cartProduct.push(JSON.parse(item));
         this.total = lamp.cantidad*lamp.precio;
        console.log(lamp)
      }
    });

  }
  
  
  
  
  
  
  
  
  
  cancelarProd(producto:any) {
    sessionStorage.removeItem("producto")+producto.id;
    const newItems = this.cartProduct.filter((item:any) => {
      return item.id !== producto.id
    });
    this.cartProduct = newItems;
    this.total -= producto.cantidad*producto.precio;
  }

  agregar(producto:any) {
    let temp = this.cartProduct.map((element: any) => {
      if (element.id === producto.id) {
        element.cantidad++;
         this.total += element.precio*element.cantidad;
        return element
        
      }
      
      else {
        return element
      }
    });
    this.cartProduct = temp
    console.log(this.total)
  }

  quitar(producto: any) {
     if(producto.cantidad === 0) {
       let borrar = this.cartProduct.filter((element:any) => {
        return element.id !== producto.id
       })
       this.total -= producto.precio*producto.cantidad
       this.cartProduct = borrar;
     }
     else {
      let temp = this.cartProduct.map((element : any) => {
        if (element.id === producto.id) {
          element.cantidad--;
             this.total = element.precio*element.cantidad;
            return element;
        }
        else {
          return element;
        }
      });
       this.cartProduct = temp
     }
  }

  openModal() {
    this.modalService.open(CheckOutComponent)
  }
}
