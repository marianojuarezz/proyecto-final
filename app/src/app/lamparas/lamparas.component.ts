import { Component, OnInit } from '@angular/core';
import { LamparasService } from '../servicios/lamparas-service/lamparas.service';

@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.component.html',
  styleUrls: ['./lamparas.component.css']
})
export class LamparasComponent implements OnInit {
lamparas: any;
  constructor(private _lamparaService : LamparasService) { }

  ngOnInit(): void {
    this._lamparaService.getLamparas().subscribe(response =>
     this.lamparas = response)
     
      
  }

}
