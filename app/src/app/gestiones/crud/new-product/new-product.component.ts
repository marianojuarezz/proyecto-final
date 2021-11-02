import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LamparasService } from 'src/app/servicios/lamparas-service/lamparas.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
@Input() lampara:any
  
title = "";
id= 0;
  constructor(private productoService : LamparasService,
              private route: ActivatedRoute,
              private modalService : NgbActiveModal) { }

  ngOnInit(): void {
    
  }
  closeModal() {
    this.modalService.close()
  }

  guardar(){
    if (this.lampara.id === 0){
      this.productoService.postLampara(this.lampara).subscribe(response =>{
        this.closeModal();
        console.log(this.guardar)
       });
    }
    else {
      this.productoService.putLampara(this.lampara).subscribe(response => {
        this.closeModal();
      });
    }
  }
  
}
