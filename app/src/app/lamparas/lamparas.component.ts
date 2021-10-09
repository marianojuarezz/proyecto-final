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
  constructor(private _lamparaService : LamparasService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this._lamparaService.getLamparas().subscribe(response =>
     this.lamparas = response) 
  }

 
}
