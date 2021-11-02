import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-lampara',
  templateUrl: './detalle-lampara.component.html',
  styleUrls: ['./detalle-lampara.component.css']
})
export class DetalleLamparaComponent implements OnInit {
@Input() lampara : any;

  constructor() { }

  ngOnInit(): void {
   
    console.log("hola",this.lampara)

  }

}
