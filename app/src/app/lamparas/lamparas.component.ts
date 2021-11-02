import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LamparasService } from '../servicios/lamparas-service/lamparas.service';
import { DetalleLamparaComponent } from './detalle-lampara/detalle-lampara.component';

@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.component.html',
  styleUrls: ['./lamparas.component.css']
})
export class LamparasComponent implements OnInit {
lamparas: any;
backup: any;
busqueda : any;
  constructor(private _lamparaService : LamparasService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this._lamparaService.getLamparas().subscribe(response => {
      this.lamparas = response;
      this.backup = response;
    });
     
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
  };

  
}
